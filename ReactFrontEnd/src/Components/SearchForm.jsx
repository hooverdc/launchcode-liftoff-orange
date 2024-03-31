import React, {useRef, useEffect} from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom'
//import { useGlobalContext } from '../../context'
import "./SearchForm.css";

const SearchForm = () => {

  const parkSearch=()=>{
    console.log("Searching parks...")
  }


  return (
    <form onSubmit={parkSearch}>
      <div className='search-form'>
        <div className='container'>
          <div className='search-form-content'>
            <form className='search-form'>
              <div className='search-form-elem flex flex-sb bg-white'>
                <input type="text" className='form-control text-black' placeholder='Yellowstone Park ...' />
                <button type="submit" className='flex flex-c'>
                  <HiMagnifyingGlass className="text-gray-400" size = {32} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
