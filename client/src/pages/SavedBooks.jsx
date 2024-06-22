import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);
  const userData = data?.me || {};

  const handleDeleteBook = async (bookId) => {
    try {
      await removeBook({
        variables: { bookId },
      });

      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <div>
          {userData.savedBooks.map((book) => (
            <div key={book.bookId}>
              {book.image ? <img src={book.image} alt={`The cover for ${book.title}`} /> : null}
              <div>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>Authors: {book.authors}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer">More Info</a>
                <button onClick={() => handleDeleteBook(book.bookId)}>Delete this Book!</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SavedBooks;
