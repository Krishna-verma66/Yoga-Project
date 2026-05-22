import axios from "axios"


const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_BACKEND_URL,
    withCredentials: true,
});

export const AuthenticatedUserData = async () => {
    try{
        let response = await API.get('/accounts/me');
        return response.data;
    }catch (error){
        console.log(error);
        return null;
    }
}


//export default AuthServices