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
        console.error('Error al obtener Usuario.');
        throw err;
    }
};

export const addUser = async(name, password, rol)=>{
    try{
        const response = await axios.post(`/api/Users/${name}/${password}/${rol}`);
        return response.data;
    }
    catch(err){
        console.error('Error al registrar usuario.');
        throw err;
    }
};

export const updateUser = async(id, name, password, rol)=>{
    try{
        const response = await axios.put(`api/Users/${id}/${name}/${password}/${rol}`);
        return response;
    }catch(err){
        console.log('Error al editar usuario.');
        throw err;
    };
};

export const deleteUser = async (id)=>{
    try{
        const response = await axios.delete(`api/Users/${id}`);
        return response.data;
    }catch(err){
        console.log('Error al eliminar Usuario.')
        throw(err);
        
    }
}