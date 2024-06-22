
  <div align="center">
  <h1 align="center">MERN Book Search</h1>
  <h3>Codebase for the MERN Book Search platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-MongoDB-004E89?logo=MongoDB&style=for-the-badge" alt='MongoDB\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Express.js-004E89?logo=Express.js&style=for-the-badge" alt='Express.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=for-the-badge" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Node.js-004E89?logo=Node.js&style=for-the-badge" alt='Node.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-GraphQL-004E89?logo=GraphQL&style=for-the-badge" alt='GraphQL\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Vite-004E89?logo=Vite&style=for-the-badge" alt='Vite"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Description](#-description)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Description

 This is a MERN (MongoDB, Express, React, Node.js) project with a client-side and server-side structure. The client-side code is written in React and uses GraphQL for data fetching and mutations. The server-side code is written in Node.js and uses MongoDB as the database. The project includes a login and signup form, a search bar, and a saved books page. The client-side code is organized into components, pages, and utils, while the server-side code is organized into controllers, models, routes, schemas, and utils.

---

## 🌟 Features

 Here is a list of features for the project:<br>
* Login and signup forms
* Search bar
* Saved books page
* GraphQL for data fetching and mutations
* MongoDB as the database
* React on the client-side
* Node.js on the server-side

---

## 📁 Repository Structure

```sh
├── .DS_Store
├── Assets
│   ├── 21-mern-homework-demo-01.gif
│   ├── 21-mern-homework-demo-02.gif
│   └── 21-mern-homework-demo-03.gif
└── Develop
    ├── .env
    ├── .npmrc
    ├── client
    │   ├── .eslintrc.cjs
    │   ├── .gitignore
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src
    │   │   ├── App.css
    │   │   ├── App.jsx
    │   │   ├── components
    │   │   │   ├── LoginForm.jsx
    │   │   │   ├── Navbar.jsx
    │   │   │   └── SignupForm.jsx
    │   │   ├── graphql
    │   │   │   ├── mutations.js
    │   │   │   └── queries.js
    │   │   ├── main.jsx
    │   │   ├── pages
    │   │   │   ├── SavedBooks.jsx
    │   │   │   └── SearchBooks.jsx
    │   │   └── utils
    │   │       ├── API.js
    │   │       ├── auth.js
    │   │       ├── localStorage.js
    │   │       └── mutations.js
    │   └── vite.config.js
    ├── package-lock.json
    ├── package.json
    └── server
        ├── controllers
        │   └── user-controller.js
        ├── models
        │   ├── Book.js
        │   ├── index.js
        │   └── User.js
        ├── package-lock.json
        ├── package.json
        ├── routes
        │   ├── api
        │   │   ├── index.js
        │   │   └── user-routes.js
        │   └── index.js
        ├── schemas
        │   ├── index.js
        │   ├── resolvers.js
        │   └── typeDefs.js
        ├── server.js
        └── utils
            └── auth.js

```

---

## 💻 Code Summary

<details><summary>\Develop\client\src</summary>

| File | Summary |
| ---- | ------- |
| App.jsx |  The code defines a React component called App, which renders a Navbar, Routes, and other components. |
| main.jsx |  The code sets up an Apollo Client for a React application, with a BrowserRouter and an InMemoryCache, and renders the App component within an ApolloProvider. |

</details>

---

<details><summary>\Develop\client\src\components</summary>

| File | Summary |
| ---- | ------- |
| LoginForm.jsx |  The code defines a React component called `LoginForm` that allows users to log in to an application using email and password. It uses the `useState` hook to manage the form's state, the `useMutation` hook to perform the login mutation, and the `useNavigate` hook to navigate to the homepage after successful login. |
| Navbar.jsx |  The code defines a React component that renders a navigation bar with a login/signup modal. The modal is displayed when the user clicks on the Login/Sign Up link and allows them to choose between logging in or signing up for an account. The component also includes a state variable to track whether the modal is currently being displayed. |
| SignupForm.jsx |  The SignupForm component is a React functional component that renders a form for signing up a new user. It uses the useState hook to manage the form's state, and the useMutation hook from Apollo Client to perform a GraphQL mutation when the form is submitted. The component also includes a handleChange function to update the form state when input fields are changed, and an error message is displayed if the mutation fails. |

</details>

---

<details><summary>\Develop\client\src\graphql</summary>

| File | Summary |
| ---- | ------- |
| mutations.js |  The code defines a GraphQL mutation for adding a new user, with variables for username, email, and password, and returns a token and the newly created user's ID and username. |
| queries.js |  The code defines a GraphQL query for retrieving the current user's information, including their ID, username, email, book count, and saved books. |

</details>

---

<details><summary>\Develop\client\src\pages</summary>

| File | Summary |
| ---- | ------- |
| SavedBooks.jsx |  The code defines a React component called SavedBooks that retrieves data from the Apollo Client cache using the useQuery hook and displays a list of saved books, along with buttons to delete each book. |
| SearchBooks.jsx |  The code defines a React component called `SearchBooks` that allows users to search for books and save them to a list. It uses the Apollo Client library to make GraphQL queries and mutations, and it utilizes the `useState` hook from React to manage state variables such as the search input and the list of saved book IDs. |

</details>

---

<details><summary>\Develop\client\src\utils</summary>

| File | Summary |
| ---- | ------- |
| API.js |  The code defines a set of functions for interacting with a RESTful API, including fetching user information, creating new users, logging in, saving and deleting book data, and searching the Google Books API. |
| auth.js |  The code defines a class called `AuthService` that provides methods for managing user authentication, including logging in, logging out, and checking if a user is logged in. |
| localStorage.js |  The code defines three functions for interacting with local storage: getSavedBookIds, saveBookIds, and removeBookId. |
| mutations.js |  The code defines GraphQL mutations for logging in a user, adding a new user, saving a book, and removing a book. |

</details>

---

<details><summary>\Develop\client</summary>

| File | Summary |
| ---- | ------- |
| vite.config.js |  The code defines a Vite configuration file that sets up a development environment for React applications, including plugins and settings for resolving imports and opening the server. |

</details>

---

<details><summary>\Develop\server\controllers</summary>

| File | Summary |
| ---- | ------- |
| user-controller.js |  The code defines a set of RESTful API endpoints for interacting with a User model in a MongoDB database, including creating, reading, updating, and deleting users, as well as saving and deleting books from a user's savedBooks field. |

</details>

---

<details><summary>\Develop\server\models</summary>

| File | Summary |
| ---- | ------- |
| Book.js |  The code defines a bookSchema in Mongoose, which is an object that contains properties for authors, description, bookId, image, link, and title, with required fields and data types. |
| index.js |  The code exports a constant called User, which is defined as a module imported from the file './User'. |
| User.js |  The code defines a User model in Mongoose, with a username, email, password, and savedBooks field. It also includes a pre-save hook to hash the password using bcrypt, and a method to compare passwords using bcrypt. |

</details>

---

<details><summary>\Develop\server\routes\api</summary>

| File | Summary |
| ---- | ------- |
| index.js |  The code defines an Express.js router and exports it, with a route for the '/users' path that uses the user-routes module. |
| user-routes.js |  The code defines an Express.js router that handles user-related requests, including creating a new user, saving a book, logging in, and deleting a book. It also includes middleware for authentication. |

</details>

---

<details><summary>\Develop\server\routes</summary>

| File | Summary |
| ---- | ------- |
| index.js |  The code defines an Express.js router that routes requests to either the API or a static HTML file, depending on the request path. |

</details>

---

<details><summary>\Develop\server\schemas</summary>

| File | Summary |
| ---- | ------- |
| index.js |  The code exports the typeDefs and resolvers from two separate files, making them available for use in a GraphQL schema. |
| resolvers.js |  The code defines a set of GraphQL resolvers for a MongoDB-backed API, including a `me` query that retrieves the currently logged-in user's data, a `login` mutation that authenticates a user and returns a JWT token, an `addUser` mutation that creates a new user and returns a token, a `saveBook` mutation that adds a book to a user's saved books list, and a `removeBook` mutation that removes a book from a user's saved books list. |
| typeDefs.js |  The code defines a GraphQL schema for a book collection app, with types for users, books, authentication, and mutations for adding and removing books. |

</details>

---

<details><summary>\Develop\server</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code sets up an Express.js server with Apollo Server, connects to a MongoDB database, and serves the GraphQL API for a full-stack application. |

</details>

---

<details><summary>\Develop\server\utils</summary>

| File | Summary |
| ---- | ------- |
| auth.js |  The code defines a module that exports two functions: `authMiddleware` and `signToken`. `authMiddleware` is a middleware function that verifies a JSON Web Token (JWT) and attaches the decoded payload to the request object if the token is valid. `signToken` generates a new JWT with the specified payload and returns it. |

</details>

---

## 🚀 Getting Started

 To get started with this MERN project, follow these steps:<br>
1. Install the necessary dependencies by running `npm install` in both the client and server directories.
2. Start the server by running `node server.js` in the server directory.
3. In a separate terminal window, start the client by running `npm start` in the client directory.
4. Open a web browser and navigate to `http://localhost:3000` to access the application.
5. You can now use the application as desired.

Note: This guide assumes that you have Node.js and MongoDB installed on your system. If you do not have them installed, you can download them from their respective websites.


