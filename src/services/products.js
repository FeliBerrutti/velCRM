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
};

export const addProducts = async(name, price, members)=>{
    try{
        const response = await axios.post(`api/Plans/${name}/${price}/${members}`);
        return response.data;
    }catch(err){
        console.error('No se pudo agregar Plan');
        throw err;
    };
};