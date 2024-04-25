import React from "react";
import axios from "axios";




    

class LoginService {

    
    login(user, instance) { 
        if (user.username && user.password) {
        instance.interceptors.request.use((config) => {
            const hash = window.btoa(user.username+":"+user.password);
            if (hash) {
                let authHeader = "Basic "+ hash;
                instance.defaults.headers["Authorization"] = authHeader;
                window.localStorage.setItem("Auth", authHeader);
            }
            
        return config
        });
        };
        
        instance.post("/user",user)
            .then((response) => {
                window.localStorage.setItem("User", JSON.stringify(response));
            })
            
            
    }
};
export default new LoginService();
 