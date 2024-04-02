import React, { useState } from 'react';
import axios from 'axios'; 

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const regex = /^[0-9]*$/;
    if (regex.test(e.target.value) || e.target.value === '') {
      setPhoneNumber(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate password length
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return;
    }

    // Validate password matching
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Prepare data for the POST request
    const data = {
      fullName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    };

    try {
      // Send a POST request to your backend endpoint
      const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle the response from the server
      if (response.status === 201) {
        alert('Successfully registered! Now go back to the home page and login.');
      } else {
        console.error('Registration failed:', response.data);
        alert('Registration failed. Please check your inputs and try again.');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('Validation error. Please check your inputs and try again.');
        console.error('Validation error:', error.response.data);
      } else {
        console.error('Error during registration:', error);
        alert('Internal Server Error. Please try again later.');
      }
    }

    // Clear the form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="register-page">
      <h2>Sign up!</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value.replace(/[^a-zA-Z ]/g, ''))}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
            {passwordMatchError && <p className="error-text">Passwords do not match.</p>}
          </div>
          <button type="submit">Sign up!</button>
        </form>
      </div>
      <style jsx>{`
        .register-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-image: url("https://images.pexels.com/photos/1386649/pexels-photo-1386649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
        }

        .form-container {
          background-color: #f5f5f5; /* Light gray background color */
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
          width: 320px; /* Adjusted to accommodate padding */
          margin-top: 20px;
        }

        form {
          width: 100%; /* Ensure form takes full width of container */
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        .error-text {
          color: red;
          margin-top: 5px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default Register;
