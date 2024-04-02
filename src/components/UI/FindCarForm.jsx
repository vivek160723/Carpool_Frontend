import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import FetchSuggestions from '../mapservices/FetchSuggestions';
// import FetchToken from "../mapservices/FetchToken";


const FindCarForm = () => {
  const [to, setTo] = useState('');
  const [destination, setDestination] = useState('');
  const [showToSuggestions, setShowToSuggestions] = useState(true);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(true);

  const handleSuggestionSelect = (selectedSuggestion, field) => {
    if (field === 'to') {
      setTo(selectedSuggestion.placeName);
      setShowToSuggestions(false); // Hide suggestions after selection
    } else if (field === 'destination') {
      setDestination(selectedSuggestion.placeName);
      setShowDestinationSuggestions(false); // Hide suggestions after selection
    }
  };

  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <div className="search-bar-container">
          <input 
            type="text" 
            className="search-bar" 
            value={to} 
            onChange={e => {
              setTo(e.target.value);
              setShowToSuggestions(true); // Show suggestions when input changes
            }} 
            placeholder="Search" 
            required 
          />
          {showToSuggestions && to && <FetchSuggestions query={to} region="IND" onSelect={(suggestion) => handleSuggestionSelect(suggestion, 'to')} />}
        </div>

        <div className="search-bar-container">
          <input 
            type="text" 
            className="search-bar" 
            value={destination} 
            onChange={e => {
              setDestination(e.target.value);
              setShowDestinationSuggestions(true); // Show suggestions when input changes
            }} 
            placeholder="Search" 
            required 
          />
          {showDestinationSuggestions && destination && <FetchSuggestions query={destination} region="IND" onSelect={(suggestion) => handleSuggestionSelect(suggestion, 'destination')} />}
        </div>
        {/* Remaining form elements... */}
        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Ride</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;