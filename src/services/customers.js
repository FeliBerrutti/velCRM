import axios from "axios";

export const fetchCustomerById = async(id)=>{
    try{
        const response = await axios.get(`/api/Customer/${id}`);
    return response.data;
    }
    catch(err){
        console.error('Error al obtener cliente.');
        throw err;
    }
}