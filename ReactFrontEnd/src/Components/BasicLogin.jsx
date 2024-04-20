import React, {useState} from 'react'

function BasicLogin() {

    const [ username, setUsername ] = useState([""]);
    const [ password, setPassword ] = useState([""]);
    const [ user, setUser ] = useState([]);










  return (
    <>

        <div className="flex flex-col items-center border border-nps-green-999">
            <div className="underline underline-offset-2">LOGIN</div>
            <label>Username: <input type="text" /></label>
            
            <label>Password: <input type="password" /></label>
            
            <button type="submit">Login</button>
        </div>
    
    </>
    
  )
}

export default BasicLogin