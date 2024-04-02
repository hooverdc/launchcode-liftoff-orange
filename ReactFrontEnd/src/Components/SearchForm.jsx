import React, {useRef, useEffect} from 'react';
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
//import "./SearchForm.css";
import './SearchHeader.css'

const SearchForm = () => {

  const {setSearchTerm} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault(); //actually allows the search not just hte defualt
    let tempSearchTerm = searchText 
    if(tempSearchTerm.length === 0){
      setSearchTerm("yellowstone"); //defualt searchterm

    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/parksearch/search");
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
              <FaSearch className='text-black' size = {32} />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SearchForm
