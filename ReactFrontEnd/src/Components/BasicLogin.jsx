import axios from 'axios';
import React, {useState} from 'react'

function BasicLogin() {

  const [ username, setUsername ] = useState([""]);
  const [ password, setPassword ] = useState([""]);
  const [ user, setUser ] = useState();

  const handleSubmit = async event => {
    event.preventDefault();
    const user = { username, password };
    const response = await axios.post(
      "http://localhost:8080/login", user
      );
    setUser(response.data)
    localStorage.setItem('user', response.data)
    console.log(response.data)
  };

  if (user) {
    return <div>{user.username} is logged in</div>
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center border border-nps-green-999 w-1/2 mx-auto rounded-xl">
            <div className="underline underline-offset-2">LOGIN</div>
            <label>Username: <input type="text" placeholder="enter your username..." value={username} 
            onChange={({ target }) => setUsername(target.value)}/></label>
            
            <label>Password: <input type="password" placeholder="enter your password..." value={password}
            onChange={({ target }) => setPassword(target.value)}/></label>
            
            <button type="submit" className="bg-nps-green-700 m-4">Login</button>
        </div>
      </form>
    </>
    
  )
}

export default BasicLogin