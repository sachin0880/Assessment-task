import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import axios from 'axios';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('https://your-api-url.com/verify-token', { token })
        .then(response => {
          setIsLoggedIn(true);
        })
        .catch(error => {
          console.error('Token verification failed');
        });
    }
  }, []);

  
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Home setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
