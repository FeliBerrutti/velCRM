import axios from "axios";

export const getAllUsers = async()=>{
    try{
        const response = await axios.get(`/api/Users/gAU`);
        return response.data;
    }catch(err){
        return console.error(err);
        throw err;
    };
};

export const addUser = async(user)=>{
    try{
        const response = await axios.post(`/api/Users/aU`, user, {headers: {
            "Content-Type": 'application/json'
        }});
        return response.data; 
    }catch(err){
        console.error('Error al añadir usuario.');
        throw err;
    };
};

export const deleteUser = async(id)=>{
    try{
        const response = await axios.delete(`/api/Users/${id}`);
        return response.data;
    }catch(err){
        console.error('Error al eliminar Usuario.');
        throw err;
    };
};