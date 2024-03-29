import React, {useRef, useEffect} from 'react';
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
//import { useGlobalContext } from '../../context'
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className='search-form'>
    <div className='container'>
      <div className='search-form-content'>
        <form className='search-form'>
          <div className='search-form-elem flex flex-sb bg-white'>
            <input type = "text" className='form-control' placeholder='Yellowstone Park ...' />
            <button type = "submit" className='flex flex-c'>
              <FaSearch className='text-' size = {32} />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SearchForm
