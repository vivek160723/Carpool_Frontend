import React, { useState, useEffect } from 'react';

const AvailableRidesPage = () => {
  // State to store the available rides
  const [availableRides, setAvailableRides] = useState([]);

  // Function to fetch available rides (You can replace this with your API call)
  const fetchAvailableRides = async () => {
    try {
      // Fetch data from your API endpoint
      const response = await fetch('your_api_endpoint_here');
      if (!response.ok) {
        throw new Error('Failed to fetch available rides');
      }
      const data = await response.json();
      // Update state with fetched data
      setAvailableRides(data);
    } catch (error) {
      console.error('Error fetching available rides:', error);
    }
  };

  // Call the fetchAvailableRides function when the component mounts
  useEffect(() => {
    fetchAvailableRides();
  }, []);

  return (
    <div>
      <h2>Available Rides</h2>
      {availableRides.length > 0 ? (
        <ul>
          {availableRides.map((ride) => (
            <li key={ride.id}>
              <h3>{ride.origin} to {ride.destination}</h3>
              <p>Departure Time: {ride.departureTime}</p>
              <p>Available Seats: {ride.availableSeats}</p>
              <button>Book Ride</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No available rides found</p>
      )}
      <style jsx>{`
        div {
          margin: 20px;
        }

        h2 {
          color: #333;
          font-size: 24px;
          margin-bottom: 10px;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          margin-bottom: 10px;
        }

        h3 {
          color: #007bff;
          font-size: 18px;
          margin-bottom: 5px;
        }

        p {
          margin: 5px 0;
        }

        button {
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 8px 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default AvailableRidesPage;
