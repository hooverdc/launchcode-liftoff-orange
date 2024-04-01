import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
import Header from './Header'
import axios from 'axios';

function Register() {
  const [user, setUser] = useState({username: "", password: "", role: "user"});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/register", user).then((response) => {
        console.log(response.status, response.data)
    })
      
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  return (<>
    <Header />
    <Slideshow />

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter a Password"
      />
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Register
