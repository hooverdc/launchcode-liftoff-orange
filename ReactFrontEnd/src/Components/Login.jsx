import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
import Header from './Header'
import axios from 'axios';

function Login() {
    const [user, setUser] = useState({username: "",password: ""})

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get("http://localhost:8080/login", user).then((response) => {
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
    
    export default Login
