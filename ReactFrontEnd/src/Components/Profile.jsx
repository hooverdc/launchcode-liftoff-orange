import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react' //useState is a React Hook that lets you add a state variable to your component.
import axios from 'axios';
// import { useHistory } from "react-router-dom"; //"The useHistory hook gives you access to the history instance that you may use to navigate."
import { useNavigate } from 'react-router-dom';


function Profile() {
    const [profile, setProfile] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(true); //idk if this is necessary
    const [formData, setFormData] = useState({ username: '', password: '' });
    // const history = useHistory();
    const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8080/profile/'+ profile.username); //gets the users info and creates url
        setProfile(response.data); //set profile
        setFormData(response.data); // Sets initial form data
        setLoading(false); //loading is false when data is fetched, so loading is completed
      } catch (error) {
        console.error('Error fetching profile:', error); //lets us know if there is an error with the request
      }
    };

    fetchProfile(); //calls fetchprofile when this runs
      // }, []);
    }, [profile.username]); //should make it so it only runs when this changes
    

    const handleChange = (e) => { //updates the form data to what the user inputs
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => { //this is when the user submits the form, it's a PUT request that saves user info
      e.preventDefault();
      try {
        await axios.put('http://localhost:8080/profile/update', formData); // this updates the profile endpoint
        const response = await axios.get('/profile/' + formData.username); //fetchs updated data again 
        setProfile(response.data); //updates the state with new data 
        alert('Profile updated successfully'); //gets notification if it works or not
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Error updating profile. Please try again.'); //oh no!
      }
    };

    const handleLogout = () => {
      if (window.confirm('Are you sure you want to log out?')) { //popup to comfirm
          localStorage.removeItem('userData'); //or "token-info instead? clear out userdata from local storage
          alert('Logout successfull');
          // setProfile({ username: '', password: '' }); //this resets the state idk if we need this because of this [profile.username]); above 
          // setFormData({ username: '', password: '' });
          // history.push('/login'); //brings user back to login page
          navigate('/login');
      }
  };

    const handleDeleteAccount = async () => {
      if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) { //creates a pop up to virify user wants to delete
        try {
          // await axios.delete('/profile/delete'); // Delete profile endpoint
          await axios.delete('http://localhost:8080/profile/delete/' + profile.username);
          alert('Account deleted successfully'); //yay!
          // history.push('/login'); // Redirects to the login page
          navigate('/home');
        } catch (error) {
          console.error('Error deleting account:', error);
          alert('An error occurred while deleting your account. Please try again later.');
        }
      }
    };
  
    if (loading) { //displays "loading" when profile info is being fetched
    
      return (
        <>
          <Header />
            <div className="h-full bg-nps-green-300 pt-20 pb-20 px-10 rounded-md">
            <h2 className="text-center font-bold text-green-900 text-3xl"> PROFILE PAGE </h2>
            <h3 className="text-center font-bold text-green-900 text-3xl">Loading...</h3>
            </div>;
        </>
      )
    }
  


// const Profile = () => {
  return (
      
    <>
    
        <Header />

        <div  className="h-full bg-nps-green-300 pt-20 pb-20 px-10 rounded-md">

          <h2 className="text-center font-bold text-green-900 text-3xl"> PROFILE PAGE </h2>

            <form onSubmit={handleSubmit} className="bg-nps-green-600 drop-shadow-2xl  my-20 py-5 w-1/4 h-2/6 flex flex-col items-center text-center mx-auto rounded-2xl">

              <div className="vertical-align-middle">

                <div className="flex items-center mb-6">
                  <div className="w-1/3">
                    <label className="block text-green-900 font-bold text-right mb-1 pr-4" for="inline-username">
                      Username:
                    </label>
                  </div>
                  <div className="w-2/3">
                    {/* <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue="Username"/> */}
                  
                    {/* <label class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ">
                        PatsUsername 
                    </label> */}

                  <input //allows user to put in new text and save it, there is a place hold but idk if that needs to be there, mostly it's for me rn
                    type="text"
                    name="username"
                    value={formData.username} //from formdata usestate above
                    onChange={handleChange}
                    placeholder="Username"
                  />
                  
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="w-1/3">
                    <label className="block text-green-900 font-bold text-right mb-1 pr-4" for="inline-password">
                      Password:
                    </label>
                  </div>
                  <div className="w-2/3">
                    {/* <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" defaultValue="**********" /> */}
                    {/* <label class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ">
                        PatsPassword
                    </label> */}

                  <input  
                    type="password" //characters are masked for security.
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  
                  </div>
                </div>
              
                <div className="flex items-center mb-6 ">
                  {/* <div class="w-1/3"></div> */}
                  <div className="w-2/3">
                  {/* conditionally disables button if submitting is true, button will disable, stops users from clicking it. prevents multiple form submissions while a request is being processed. */}
                  {/* <button type="submit" class="shadow bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" disabled={submitting}>
                          {submitting ? 'Submitting...' : 'Save Changes'} If submitting is true, text displayed on button will be "Submitting..."
                       </button> need to add function*/}
                       
                    <button type="submit" className="shadow bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                      Save Changes
                    </button>

                    <button onClick={handleLogout} className="shadow bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                      Logout
                    </button> 

                    <button onClick={handleDeleteAccount} className="shadow bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                      Delete Account
                    </button> 
                  </div>
                </div>

                </div>

              </form>

</div></>

  )
}


export default Profile

//showAlert - "profile updated"
//how to only have it show if logged in - in App I have a basic of maybe how that would work??? It should redirect to login
//I need to make it so that the username/password does not mess up css 
// {users.name} {users.password}
//do I need to include a logout? it will then need to redirect to login page
//delete acount? will need button, function, a confirmation to delete
//windows.local storage delete / when sending a post request user.data.isnotnull //user id - forgien key 
// delete local storage  when loggged out  - 
//get authinticated 
//will add outlet to load reviews favs and itineraries
//add notes on how things work 
//do we need to add @Size(min =5, max = 20) to username and password - in backend and front end 
//ask if i set up sql right
//eventlistener??
//trim off white space before sending
//login page should use naviage to go to profile or home