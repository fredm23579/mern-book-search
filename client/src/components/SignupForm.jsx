import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      navigate('/');
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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Your username"
          value={formState.username}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Your password"
          value={formState.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div>Signup failed</div>}
    </div>
  );
};

export default SignupForm;
