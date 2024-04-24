import React, {useRef, useEffect, useState} from 'react';
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
//import "./SearchForm.css";
// import './SearchHeader.css'
import { Dropdown } from 'flowbite-react';

const SearchForm = () => {

  const {setSearchTerm} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();
  const [stateSearch, setStateSearch] = useState(''); 

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {

    e.preventDefault(); //actually allows the search not just the defualt
    let tempSearchTerm = searchText.current.value.trim(); //removes whitespace from both ends of this string and returns a new string
    
    if(tempSearchTerm === ''){
      setSearchTerm("Yellowstone"); //defualt searchterm ---there is a defualt now but 3 results with 1 being yellowstone?
      
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

            <div className="card flex justify-content-center">
            <Dropdown ref={searchState} onChange={(e) => setStateSearch(e.value)} options={states} optionLabel="name"
              placeholder="Select a State" className="w-full md:w-14rem" />
          </div>

          </div>
        </form>
  //     </div>
  //   </div>
  // </div>
   )
}

export default SearchForm

// const {setSearchTerm, setResultSearch} = useGlobalContext();
//   const searchText = useRef('');
//   const navigate = useNavigate();

//   useEffect(() => searchText.current.focus(), []);
//   const handleSubmit = (e) => {
//     e.preventDefault(); //actually allows the search not just the defualt
//     let tempSearchTerm = searchText 
//     if(tempSearchTerm.length === 0){
//       setSearchTerm("yellowstone"); //defualt searchterm
//       setResultSearch("Please enter something");
//     } else {
//       setSearchTerm(searchText.current.value);
//     }

//     navigate("/parksearch/search");
//   };
