import axios from "axios";

export const loginUser = async(auxLogin)=>{
    try{
        const response = await axios.post(`https://crmapi.somee.com/api/Users/login`, auxLogin);
        return response.data;
    }catch(err){
        console.error('Error al iniciar sesión.');
        throw err;
    };
};