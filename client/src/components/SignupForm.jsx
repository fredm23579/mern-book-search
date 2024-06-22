import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../graphql/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        id="username"
        name="username"
        type="text"
        value={formState.username}
        onChange={handleChange}
        autoComplete="username"
        required
      />
      <input
        id="email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
        autoComplete="email"
        required
      />
      <input
        id="password"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
        autoComplete="new-password"
        required
      />
      <button type="submit">Sign Up</button>
      {error && <div>Signup failed</div>}
    </form>
  );
};

export default SignupForm;
