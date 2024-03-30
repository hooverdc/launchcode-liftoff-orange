import React, {useRef, useEffect} from 'react';
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
import "./SearchForm.css";

const SearchForm = () => {

  const {setSearchTerm} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault(); //prevents only yellowstone showing up
    let tempSearchTerm = searchText 
    if(tempSearchTerm.length === 0){
      setSearchTerm("yellowstone park"); //defualt searchterm

    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/parksearch/searchlist");
  };

  //^^^what makes the button clickable

  //creates the search container

  return (
    <div className='search-form'>
    <div className='container'>
      <div className='search-form-content'>
        <form className='search-form' onSubmit={handleSubmit}>
          <div className='search-form-elem flex flex-sb bg-white'>
            <input type = "text" className='form-control' placeholder='Yellowstone Park ...' ref = {searchText}/>
            <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
              <FaSearch className='text-green' size = {32} />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SearchForm
