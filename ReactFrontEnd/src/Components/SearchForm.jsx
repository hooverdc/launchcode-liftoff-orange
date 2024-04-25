import React, {useRef, useEffect, useState} from 'react'; //manages state and side effects
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
//import "./SearchForm.css";
// import './SearchHeader.css'

//this is responsible for rendering the search input field and handling search functionality
// This provides the search form interface and 
// allows users to input a search term and then trigger the search 
// It updates the application state and then has the search load to display search results

const SearchForm = () => {

  const {setSearchTerm} = useGlobalContext(); 
  const searchText = useRef(''); //input
  const navigate = useNavigate();
 

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {

    e.preventDefault(); //actually allows the search not just the defualt
    let tempSearchTerm = searchText.current.value.trim(); //removes whitespace from both ends of this string and returns a new string
    
    if(tempSearchTerm === ''){
      setSearchTerm("park"); //defualt searchterm
      //setSearchTerm is from global context that sets the search term
    } else {
      setSearchTerm(tempSearchTerm);
    }

    navigate("/parksearch/search");
  };

  //^^^what makes the button clickable

  //creates the search container

  return (
    // <div className='search-form'>
    // <div className='container'>
    //   <div className='search-form-content'>
        // <form className='search-form' onSubmit={handleSubmit}>
        <form className='size-full max-w-screen-sm' onSubmit={handleSubmit}>
          {/* <div className='search-form-elem flex flex-sb bg-white'> */}
          <div className='p-5 rounded-full flex flex-sb bg-white'>
            {/* <input type = "text" className='form-control text-gray-500 w-full' placeholder='Yellowstone Park ...' ref = {searchText}/> */}
            <input type = "text" className='text-gray-500 w-full text-4xl p-px' placeholder='Yellowstone Park ...' ref = {searchText}/>
            <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
              <FaSearch className='text-black' size = {32} /> 
            </button>

          </div>
        </form>
  //     </div>
  //   </div>
  // </div>
   )
}

export default SearchForm
