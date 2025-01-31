import axios from "axios";

export const getProducts = async()=>{
    try{
        const response = await axios.get(`/api/Plans`);
        return response.data;
    }
    catch(err){
        console.error('Error al obtener planes.');
        throw err;
    }
}