import axios from "axios";

export const getAllDowns = async()=>{
    try{
        const response = await axios.get(`/api/Downs/gAD`);
        return response.data;
    }catch(err){
        console.error('Error al obtener bajas.');
        throw err;
    };
};

export const getDownsByCI = async(id)=>{
    try{
        const response = await axios.get(`/api/Downs/gDbCI/${id}`);
        return response.data;
    }catch(err){
        console.error('Error al traer las bajas del Cliente.');
        throw err;
    };
};

export const addDown = async(down)=>{
    try{
        const response = await axios.post(`/api/Downs/aD`, down);
        return response.data;
    }catch(err){
        console.error('Error al registrar baja de servicio.');
        throw err;
    };
};
