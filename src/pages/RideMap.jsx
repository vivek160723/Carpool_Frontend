import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react'; // Import Google Maps React library
import axios from 'axios';
import '../styles/RideMap.css';

const RideMap = ({ pickup, destination }) => {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    // Function to fetch route from pickup to destination
    const fetchRoute = async () => {
      try {
        // Make request to routing API (e.g., Google Directions API)
        const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json`, {
          params: {
            origin: pickup,
            destination: destination,
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY // Replace with your API key
          }
        });
        
        // Extract route data from response and set it in state
        setRoute(response.data.routes[0].overview_polyline.points);
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };

    // Fetch route when component mounts
    fetchRoute();
  }, [pickup, destination]);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} // Replace with your API key
        defaultCenter={{ lat: 0, lng: 0 }} // Default center of the map
        defaultZoom={8} // Default zoom level
      >
        {/* Render route on the map */}
        {route && <Polyline path={google.maps.geometry.encoding.decodePath(route)} />}
      </GoogleMapReact>
    </div>
  );
};

export default RideMap;
