import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      phoneNumber,
      password,
    };

    try {
      const response = await axios.post(process.env.REACT_APP_LOGIN_URL, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        
        setShowPopup(true);
        
      } else {
        console.error('Login failed:', response.data);
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Internal Server Error. Please try again later.');
    }

    setPhoneNumber('');
    setPassword('');
  };

  // Function to handle phone number change
  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (inputPhoneNumber.length <= 10) {
      setPhoneNumber(inputPhoneNumber);
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your phone number"
              pattern="[0-9]{10}" // Restrict input to 10 digits
              title="Please enter a 10-digit phone number" // Hint for users
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
          <button type="submit">Login</button>
        </form>
      </div>
      {showPopup && (
        <div className="popup">
          <p>Successfully logged in!</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
      <style jsx>{`
        .App {
          display: flex;
          justify-content: center;
          background-image: url("https://images.pexels.com/photos/1386649/pexels-photo-1386649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
          align-items: center;
          height: 100vh;
        }

        .form-container {
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          width: 300px;
        }

        .login-form {
          width: 100%; /* Ensure form takes full width of container */
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input[type='tel'],
        input[type='password'] {
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

        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 20px;
          border-radius: 8px;
          z-index: 9999;
        }

        .popup p {
          margin: 0;
          font-size: 18px;
        }

        .popup button {
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Login;
