import { Axios } from "axios";



class AxiosInterceptor {
    
    updatePostHeader = (credentials, instance) => instance.interceptors.request.use(
        (config) => {
            const hash = window.btoa(credentials.username+":"+credentials.password);
            const csrfToken = localStorage.getItem("X-XRSF-TOKEN");
            if (hash) {
                instance.defaults.headers["Authorization"] = hash;
            }
            if(csrfToken) {
                instance.defaults.headers["X-XRSF-TOKEN"] = csrfToken;
            }
        return config
        }
        
    )
} 
export default AxiosInterceptor;