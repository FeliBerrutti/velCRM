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

export const addProducts = async(name, price, members, details)=>{
    try{
        const response = await axios.post(`api/Plans/${name}/${price}/${members}/${details}`);
        return response.data;
    }catch(err){
        console.error('No se pudo agregar Plan');
        throw err;
    };
};

export const getDetailsByName = async(name)=>{
    try{
        const response = await axios.get(`api/Plans/${name}`);
        return response.data;
    }catch(err){
        console.error('No se pudo obtener detalles del plan.');
        throw err;
    };
};

export const getByName = async(name)=>{
    try{
        const response = await axios.get(`api/Plans/${name}`);
        return response.data;
    }catch(err){
        console.error('No se pudo obtener datos del plan seleccionado.');
        throw err;
    };
};

export const deleteProductByName = async(name)=>{
    try{
        const response = await axios.delete(`api/Plans/${name}`);
        return response.data;
    }catch(err){
        console.error('Error eliminando plan seleccionado.');
        throw err;
    };
};