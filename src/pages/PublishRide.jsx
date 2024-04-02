import React, { useState } from 'react';
import '../styles/PublishRidePage.css';

const PublishRidePage = () => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [carName, setCarName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Publish the ride with the provided information
  };

  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    // Only allow numbers and limit to a maximum length of 10 characters
    const sanitizedValue = inputValue.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(sanitizedValue);
  };

  return (
    <div className="publish-ride-page">
      <div className="publish-ride-form">
        <h1>Publish Ride</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="start-location">Start Location:</label>
            <input
              type="text"
              id="start-location"
              value={startLocation}
              onChange={(event) => setStartLocation(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="end-location">End Location:</label>
            <input
              type="text"
              id="end-location"
              value={endLocation}
              onChange={(event) => setEndLocation(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <select
              id="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            >
              <option value="">-- Select Time --</option>
              <option value="12:00 AM">12:00 AM</option>
              <option value="12:30 AM">12:30 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              {/* Add other time options */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="seats-available">Seats Available:</label>
            <input
              type="number"
              id="seats-available"
              value={seatsAvailable}
              onChange={(event) => setSeatsAvailable(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="text"
              id="phone-number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter Phone Number (Max 10 digits)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="car-name">Car Name:</label>
            <input
              type="text"
              id="car-name"
              value={carName}
              onChange={(event) => setCarName(event.target.value)}
            />
          </div>
          <button type="submit" className="publish-ride-button">Publish Ride</button>
        </form>
      </div>
    </div>
  );
};

export default PublishRidePage;
