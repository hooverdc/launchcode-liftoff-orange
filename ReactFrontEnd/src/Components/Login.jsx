import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
import Header from './Header'
import axios from 'axios';
import LoginService from '../Services/LoginService';
import UserFavorites from './UserFavorites';
const SERVER_API_BASE_URL = "http://localhost:8080/";
const axiosInstance = axios.create({
        withCredentials: true,
        baseURL: SERVER_API_BASE_URL,
        headers: {
        "Cache-Control": "no-cache",
        "Accept-Language": "en",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
        "Authorization": null,
        
        }});

function Login() {
    const [userLogin, setUser] = useState({username: "",password: ""})

    const handleSubmit = (event) => {
        event.preventDefault();
        LoginService.login(userLogin, axiosInstance);
        };
          
      
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUserLogin => ({ ...prevUserLogin, [name]: value }));
      };
      
      return (
      
      <div className="bg-nps-green-300 h-full">
        <Header />
        <Slideshow />
        <div className="flex justify-center">
          <form className="flex flex-col p-4 w-1/2 items-center" onSubmit={handleSubmit}>
            <label className="">Username: 
              <input className=""
              type="text"
              name="username"
              value={userLogin.username}
              onChange={handleChange}
              placeholder="Username"
              />
            </label>
            <label className="">Password: 
              <input
              type="password"
              name="password"
              value={userLogin.password}
              onChange={handleChange}
              placeholder="Enter a Password"
              />
            </label>
            <button type="submit" className="bg-nps-green-600">Submit</button>
          </form>
        </div>
          
      </div>
      );
    }
    
    export default Login
