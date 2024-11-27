import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  // State for email, password, and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token); // Store token
      window.location.href = '/dashboard'; // Redirect to Dashboard
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Login
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginPage;
