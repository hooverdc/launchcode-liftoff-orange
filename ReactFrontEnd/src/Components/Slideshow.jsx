import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import { Carousel } from "flowbite-react"

const PIC_BASE_URL="";
function Slideshow() {
    const [picList, setPicList] = useState([]);
    useEffect(()=>{
        getParkPics();
    },[])
    const getParkPics=()=>{
        GlobalAPI.getImages.then(response=>{
            setPicList(response.data.data)
        })
    }
    
    const myArray = picList.map(item => item.fileInfo.url);

    return (
        // ### PREVIOUS SLIDE SHOW ITERATION ###
        // <div className="flex overflow-x-auto  w-full px-10 py-2 ">       
        //     {picList.map((item,index)=>(
                
        //         <img src={item.fileInfo.url} 
        //         className="min-w-full h-[310px] object-cover object-left-top mr-5 rounded-sm"/>
        //     ))}
        // 
        // </div>
        //### END OF OLD SLIDE SHOW ###

        //this div renders slide show using images from "picList". Interval can be changed 
        //by altering 'slideInterval'. Prev/next image buttons are hidden with leftControl
        //and rightControl set to non-breaking space...delete those props to make them visible
        
        <>
            <div className="h-80 px-5 py-2">
                <Carousel slideInterval={7000} indicators={false} pauseOnHover leftControl="&nbsp;" rightControl="&nbsp;">
                    {picList.map((item, idx) => (
                        <img key={idx}src={item.fileInfo.url} className="min-w-full"/>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default Slideshow