//proof of Spring Api fetching
import { useState, useEffect } from "react";
const Fetch = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/user')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch(error => console.error('Error fetching api', error));
        },[]);
        
    return(
        <div>
            <h2 class = "text-info">Users</h2>
            <ul class = "text-danger">
                {users.map(user => (<li key={user.id}>{user.userName}</li>))}
            </ul>
        </div>
    );
}
export default Fetch;

