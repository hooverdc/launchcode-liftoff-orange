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

        //this div renders slide show using images from "picList". Interval can be changed 
        //by altering 'slideInterval' (milliseconds). # of images keyword for image search can
        // be adjusted by altering getImages in GlobalAPI.jsx. 
        //Prev/next image buttons are hidden with leftControl
        //and rightControl set to non-breaking space...delete those props to make them visible

        <>
        <div className="h-80 px-5 py-2">
            <Carousel slideInterval={3500} indicators={false} pauseOnHover leftControl="&nbsp;" rightControl="&nbsp;" className="">
                {picList.map((item) => (
                    <img src={item.fileInfo.url} className="min-w-full"/>
                ))}
            </Carousel>
        </div>
        </>
    )
}

export default Slideshow