{/* KW - 3/23/24 */}

import React from 'react'
import { Link } from 'react-router-dom'

{/* this functional component generates each nav link from the "menu" const in 
Header.jsx into its own element in the Header */}
function HeaderItem({name,Icon,path}) {
  return (
    // <div className="text-white flex items-center gap-3 
    // text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8">
    //     <Icon/>

    //     {/* this will hide the text for each nav link in the header when the 
    //     screen width is small/mobile */}
    //     <h2 className="hidden md:block">{name}</h2>
    // </div>
    <>
        <Link to={path}>
          <div className="text-white flex items-center gap-3 
          text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8">
            <Icon/>
            <h2 className="hidden md:block">{name}</h2>
          </div>
        </Link>
    </>
  )
}

export default HeaderItem