import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
import Header from './Header'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from 'axios'


function Home() {
  
  //### THIS ONE WORKS ### 
  // const queryClient = useQueryClient();
  // const { data, error, isLoading, status } = useQuery({
  //   queryKey: ["someparks"],
  //   queryFn: () =>
  // //     // fetch("https://developer.nps.gov/api/v1/parks?q=a&api_key=Wrk46hd2qqrRis6VpJA8CT12EeDczzGa9dYRBjYk").then((res) => res.json()),
  //     axios.get("https://developer.nps.gov/api/v1/parks?q=blue&api_key=Wrk46hd2qqrRis6VpJA8CT12EeDczzGa9dYRBjYk").then((response) => (response.data.data))
  // });

  // if (error) return <div>There was an error</div>;
  // if (isLoading) return <div>DATA IS LOADING...</div>

  // console.log("DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA ")
  // console.log(data)

  return (
    <>
      <Header />
      <Slideshow />
      <h1>THIS IS THE HOME PAGE</h1>
    </>
  )
}

export default Home