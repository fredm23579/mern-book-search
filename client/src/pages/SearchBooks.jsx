import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations';
import { searchGoogleBooks } from '../utils/API';
import { getSavedBookIds, saveBookIds } from '../utils/localStorage';
import Auth from '../utils/auth';

const SearchBooks = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());
  const [saveBook] = useMutation(SAVE_BOOK);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGoogleBooks(searchInput);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { items } = await response.json();
      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ['No author to display'],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || '',
        link: book.volumeInfo.infoLink,
      }));

      setSearchedBooks(bookData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveBook = async (bookId) => {
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

    try {
      await saveBook({
        variables: { book: bookToSave },
      });

      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
      saveBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Search for a book"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        {searchedBooks.map((book) => (
          <div key={book.bookId}>
            {book.image ? <img src={book.image} alt={`The cover for ${book.title}`} /> : null}
            <div>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>Authors: {book.authors}</p>
              <a href={book.link} target="_blank" rel="noopener noreferrer">More Info</a>
              {Auth.loggedIn() && (
                <button
                  disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                  onClick={() => handleSaveBook(book.bookId)}
                >
                  {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                    ? 'Book Already Saved'
                    : 'Save This Book!'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBooks;
