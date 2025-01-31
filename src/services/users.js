import axios from "axios";

export const getUsers = async()=>{
    try{
        const response = await axios.get(`/api/Users`);
        return response.data;
    }
    catch(err){
        console.error('Error al obtener usuarios.')
        throw err;
    }
}