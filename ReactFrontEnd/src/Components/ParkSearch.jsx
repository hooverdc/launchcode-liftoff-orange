import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SearchForm from './SearchForm'
import './SearchHeader.css'


//This loads the Header at the top of the page
//Has css to import picture in the background and size of the search
//renders SearchForm when search is used
//Outlet allows the search bar to stay on the page and load the child route SearchList below it
//will remove <p> if we get enums


const ParkSearch = () => {
  return (
    <>
      <div>
          <div className='holder'>
          <header className='search-header'>
            <Header />
            <div className='search-header-content flex flex-c text-center text-white'>
            {/* <div class='flex flex-c text-center text-white bg-h-full bg-gradient-to-r from-nps-green-900 to-green-500 background-image: url("../images/photo1.jpg") bg-no-repeat bg-center flex-col bg-fixed'> */}
              {/* <h2 className='search-header-title text-capitalize'> Search for a park to visit!</h2> */}
              <h2 className='text-6xl text-capitalize'> Search for a park to visit!</h2>
              <SearchForm />
              <p>Search by national park name, state abbreviation, or by activitie</p>
            </div>
          </header>
         
        </div>
        <Outlet />
      </div>
     
    </>
  )
}


export default ParkSearch




