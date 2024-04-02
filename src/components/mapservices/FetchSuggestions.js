//FetchSuggestions.js
import React, { useEffect, useState } from 'react';
// import FetchToken from './FetchToken';

const FetchSuggestions = ({ query, region, onSelect }) => {
  const [suggestions, setSuggestions] = useState(null);
  const handleSuggestionClick = (suggestion) => {
    // Handle suggestion click logic here
    onSelect(suggestion);
    console.log('Suggestion clicked:', suggestion);
    // You can perform further actions here such as setting the suggestion in the input field
  };
   

  useEffect(() => {
    if (query !== "" && query.length > 2) {
      fetch('http://localhost:3004/generate-token')
        .then(response => response.json())
        .then(data => {
          fetch('http://localhost:3004/getToken')
            .then(response => response.json())
            .then(data => {
              fetch(`http://localhost:3004/autosuggest?query=${query}&region=${region}&token=${data.token.access_token}`, {
                headers: {
                  Authorization: `Bearer ${data.token.access_token}`,
                },
              })
              .then(response => response.json())
              .then(data => {
                // Limiting suggestions to a maximum of 5
                const limitedSuggestions = data.slice(0, 5);
                setSuggestions(limitedSuggestions);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [query, region]); // Add query and region to the dependency array

  return (
    <div className='suggestions-container'>
      {suggestions ? (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.placeName}
            </li>
          ))}
        </ul>
      ) : (
        <p>No suggestions</p>
      )}
    </div>
  );
};


export default FetchSuggestions;
