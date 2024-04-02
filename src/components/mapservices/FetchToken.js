import React, { useEffect, useState } from 'react';

const FetchToken = () => {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3004/getToken')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setToken(data.access_token);
        console.log(token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Access Token</h2>
      
;      {token ? <p>{token}</p> : <p>Loading...</p>}
    </div>
  );
};

export default FetchToken;
