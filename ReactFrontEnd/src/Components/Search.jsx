import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
//import "./SearchList.css";
import './SearchHeader.css'


// This is responsible for rendering a search item which includes image, park name, state, and activities.
//I use map on activities so that it lists all activities not just one
// the park name(fullname) is linked to the park details page
//I've also made it so that only 3 activities show at a time and you have to clikc show more to show all of them


const Search = (search) => {


  const [showAllActivities, setShowAllActivities] = useState(false);


  const toggleActivities = () => {
    setShowAllActivities(!showAllActivities);
  };


 
  return (
    // <div className='search-item flex flex-column flex-sb drop-shadow-2xl bg-nps-green-500'>
    <div className='p-12 rounded-3xl flex flex-column flex-sb drop-shadow-2xl bg-nps-green-500'>
     
      <div className='search-item-img'>
        <img src = {search.cover_id} alt = "photo" />
      </div>


     <div className='search-item-info text-center'>
        <Link to = {`${search.parkcode}`} {...search}>
          {/* <div className='search-item-info-item parkname fw-7 fs-18'> */}
          <div className='underline'>
            <span>{search.fullname}</span>
          </div>
        </Link>
        {/* //this displaces the park name and makes it a link to go to a new page */}




        <div className='search-item-info-item state fs-15'>
          <span className='text-capitalize fw-7'>State: </span>
          <span>{search.states}</span>
        </div>


        {/* <div className='search-item-info-item activities fs-15'> */}
        {/* <div className=''>
          <span className='text-capitalize fw-7'>Activities: </span>
          <span>{search.activities.map((activitie) => {
                    return activitie.name + ", "
            })}
           
            </span> */}


          <div>
          <span className='text-capitalize fw-7'>Activities: </span>
          {showAllActivities ? (
            search.activities.map((activity) => (
              <span key={activity.id}>{activity.name}, </span>
            ))
          ) : (
            search.activities.slice(0, 3).map((activity) => (
              <span key={activity.id}>{activity.name}, </span>
            ))
          )}
          {search.activities.length > 3 && (
            <span onClick={toggleActivities} className="text-green-900 underline font-bold cursor-pointer">
              {showAllActivities ? 'Show less' : 'Show more'}
            </span>
          )}
        </div>


        {/* </div>  */}


      </div>
    </div>  
  )
}


export default Search





