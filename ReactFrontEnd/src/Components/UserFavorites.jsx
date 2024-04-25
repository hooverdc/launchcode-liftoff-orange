import React, { useState, useEffect } from 'react'
import getFavoritesByUserId from '../Services/FavoritesServices'

if (localStorage.getItem("User") !== null) {
    console.log("LOCAL STORAGE USER EXISTS")
} else {
    console.log("NO LOCAL STORAGE")
}

// console.log("LOCAL STORAGE")
// console.log(localStorage.user)
// console.log(localStorage.getItem("user"))
//store user favorites into variable, use in initial useState
// localStorage.getItem()




function UserFavorites() {

    const [ currentUser, setCurrentUser ] = useState([""]);
    const [ userFavs, setUserFavs ] = useState([""]);

    let user = ((JSON.parse(localStorage.getItem("User"))).data.id)
    console.log("")

    //this retrieves current user from localStorage
    useEffect(() => {  
        
    }, []);

    //create call to backend here to retrive user favorites 
    useEffect(() => {
    //     const currentFavorites = getFavoritesByUserId(currentUser);
    //     setUserFavs(currentFavorites);
    }, [userFavs])

    //whenever a favorite park is deleted, useEffect needs to update the the collection of user's favorite parks and rerender the table of favorites
    useEffect(() => {
        //delete park
        //setUserFavs to current listed favs
        //rerender new list of favs (minus fav that was deleted)
    },[userFavs])

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