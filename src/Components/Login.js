import React, { useState } from 'react';
import axios from 'axios';
import "../Style/Login.css"

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='home1'>
      
      <form className='form' onSubmit={(e) => e.preventDefault()}>
             
      <h2 className='loginh2'>Login</h2>
       
         <div className='boxs'>   
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br/>

        <button onClick={handleLogin}>Login</button>

        <br/>
        {error && <p className='loginp' style={{ color: 'red' }}>{error}</p>}
        </div>
      </form>
  
    </div>
  );
};

export default Login;
