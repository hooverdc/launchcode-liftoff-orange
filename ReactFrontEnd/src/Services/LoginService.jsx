import React from "react";
import axios from "axios";




    

class LoginService {

    
    login(user, instance) { 
        if (user.username && user.password) {
        instance.interceptors.request.use((config) => {
            const hash = window.btoa(user.username+":"+user.password);
            if (hash) {
                instance.defaults.headers["Authorization"] = "Basic "+hash;
            }
            
        return config
        });
        };
        
        instance.post("/user",user)
            .then((response) => {
                localStorage.setItem("csrfToken", )
            })
            
            
    }
};
export default new LoginService();
 