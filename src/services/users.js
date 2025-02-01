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
};

export const getUserId = async(id)=>{
    try{
        const response = await axios.get(`/api/Users/${id}`);
        return response.data;
    }
    catch(err){
        console.error('Error al obtener Usuario.')
        throw err;
    }
};

export const getUserName = async(name)=>{
    try{
        const response = await axios.get(`/api/Users/${name}`);
        return response.data;
    }
    catch(err){
        console.error('Error al obtener Usuario.')
        throw err;
    }
};

export const getUserIdName = async(id, name)=>{
    try{
        const response = await axios.get(`/api/Users/${id}/${name}`);
        return response.data;
    }
    catch(err){
        console.error('Error al obtener Usuario.')
        throw err;
    }
};

