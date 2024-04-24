import React, { useState, useEffect } from 'react'

//create call to backend here to retrive user favorites 
//store user favorites into variable, use in initial useState


function UserFavorites() {

    const [ userFavs, setUserFavs ] = useState([]);

//whenever a favorite park is deleted, useEffect needs to update the the collection of user's favorite parks and rerender the table of favorites
    useEffect(() => {
        
    },[])

    const handleClick = () => {
        //call to backend to delete park from favorite list


    }
    
    const userFavParks = [];

    userFavParks.map((favPark) => {
        //insert logic here to retrive park name using park code
        //store this park name as some variable
        return (
            <tr className="ease-in-out duration-300 hover:bg-nps-green-500">
                {/* insert literal for park name on line below */}
                <td className="border border-nps-green-900 px-6 py-2">Sample Park Name</td>
                <td className="border border-nps-green-900 px-6 py-2"><button className="bg-red-600" onClick={handleClick}>Delete</button></td>
            </tr>
        )
    })
    

  return (
    <>      
        <div className="flex justify-center">
            <table className="table-auto border-collapse border-2 border-nps-green-900">
                <caption>Your Favorite Parks</caption>
                <tbody>
                   <tr className="bg-nps-green-700">
                    <th className="border border-nps-green-900 px-6 py-2" >Park Name</th> 
                    <th className="border border-nps-green-900 px-6 py-2">Edit</th>
                </tr>
                <tr className="ease-in-out duration-300 hover:bg-nps-green-500">
                    <td className="border border-nps-green-900 px-6 py-2">Sample Park Name</td>
                    <td className="border border-nps-green-900 px-6 py-2"><button className="bg-red-600" onClick={handleClick}>Delete</button></td>
                </tr>
                <tr className="ease-in-out duration-300 hover:bg-nps-green-500">
                    <td className="border border-nps-green-900 px-6 py-2">Sample Park Name 2</td>
                    <td className="border border-nps-green-900 px-6 py-2"><button className="bg-red-600" onClick={handleClick}>Delete</button></td>
                </tr>
                <tr className="ease-in-out duration-300 hover:bg-nps-green-500">
                    <td className="border border-nps-green-900 px-6 py-2">Sample Park Name 3</td>
                    <td className="border border-nps-green-900 px-6 py-2"><button className="bg-red-600" onClick={handleClick}>Delete</button></td>
                </tr> 
                </tbody> 
                
            </table>
        </div>
    </>
  )
}

export default UserFavorites