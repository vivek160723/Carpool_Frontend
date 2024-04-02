import React, { useState } from 'react';
import "../../styles/PanicButton.css";

const PanicButton = () => {
  const [isSOSActive, setSOSActive] = useState(false);

  const handleSOSClick = () => {
    setSOSActive(true);

    // Set a timeout to toggle isSOSActive back to false after 3 seconds
    setTimeout(() => {
      setSOSActive(false);
    }, 3000);

    // Add logic here to trigger SOS functionality (e.g., send alert/notification)
  };

  return (
    <div className="panic-button">
      <button className="sos-button" onClick={handleSOSClick}>
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 15h2v2h-2v-2zm0-8h2v6h-2V7z"
          />
        </svg>
      </button>
      {isSOSActive && (
        <div className="sos-alert">
          <p>SOS alert sent!</p>
        </div>
      )}
    </div>
  );
};

export default PanicButton;
