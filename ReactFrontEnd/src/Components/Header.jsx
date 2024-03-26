{/* KW - 3/23/24 */}

import React from 'react'
import logo from '../assets/Images/NPS-Logo.png'
import {HiHome, HiMagnifyingGlass,HiStar,HiPaperAirplane,HiBars3} from "react-icons/hi2";
import {HiUser} from "react-icons/hi2";
import {HiPlus,HiDotsVertical} from "react-icons/hi";
import { list } from 'postcss';
import HeaderItem from './HeaderItem';


{/* this functional component is used to define the header bar content */}
function Header() {

    // menu is used to define key/values for nav bar links. 
    //Name is the string value for nav bar link, icon refers 
    //to icon import from react-icon repo (react-icons.github.io for 
    //more, "hero-icon 2" collection is used to start)

    const menu = [
        {
            name:'HOME',
            icon:HiHome,
            path:'/'
        },
        {
            name:'PARK SEARCH',
            icon:HiMagnifyingGlass,
            path:'/parksearch'
        },
        {
            name:'FAVORITES',
            icon:HiStar,
            path:'/favorites'
        },
        {
            name:'ITINERARY',
            icon:HiPaperAirplane,
            path:'/itinerary'
        }
    ]
    return (

        <div className="flex items-center justify-center p-5">
            <div className="flex gap-8 items-center">
            <img src={logo} className="w-[80px] 
            md:w-[115px] object-cover"></img>
                
                {/* divs below iterate through menu const above to 
                render each into a navlink with its icon */}
                
                {/* this nav bar is visible ONLY when screen width 
                is OVER 7## px wide  */}
                <div className="hidden md:flex gap-8">
                    {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon} path={item.path}/>
                    ))}
                </div>
                
                {/* this nav bar is visible ONLY when screen width 
                is UNDER 7## px wide */}
                <div className="flex md:hidden gap-5">
                    {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon} path={item.path}/>
                    ))}
                </div>
            
            {/* ### this div can be used if you want to collapse some 
            nav bar links when screen width is small (mobile) - the 
            hidden options could be displayed when clicking on 3 bars 
            or 3 dots ### */}
                {/* <div className="md:hidden">
                    <HeaderItem name={''} Icon={HiBars3} />
                        <div>
                            {menu.map((item,index)=>index>2&&(
                            <HeaderItem name={''} Icon={item.icon}/>
                            ))}
                        </div> 
                    </div>  */}

            {/* this is just a placeholder for an icon that could be used for the user's profile
            which is located in the nav bar, but outside of the other nav links*/}
                <div><HiUser size={23} coloer="white"/></div>
            </div>
        </div>

    )
}

export default Header