import React from 'react';
import { useGlobalContext } from '../context';
import Search from "./Search";
import './SearchHeader.css'

// This is a container to display the search results
// It fetches search data from globalContext in the context file 
//this provides the grid styling
//the map limits the search items displayed 
//it renders each item using Search, each search is assigned to it's own key it's bases on the index in the searches array

const SearchList = () => {

  const { searches, resultName } = useGlobalContext(); //accesses the searches and resultName from context

  return (
    // <section className='searchlist bg-nps-green-300'>
    <section className='p-12 bg-nps-green-300'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultName}</h2>  
          {/* ^^^"your search results" */}
        </div>
        {/* <div className='searchlist-content grid'> */}
        <div className='gap-12 grid'>
          {
            //limits search and shows results
            searches.slice(0, 20).map((item, index) => {
              return (
                <Search key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default SearchList