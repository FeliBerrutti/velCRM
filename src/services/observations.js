import axios from "axios";

export const getByDni = async(auxDNI)=>{
    try{
        const response = await axios.get(`/api/Observation/${auxDNI}`);
        return response.data;
    }
    catch(err){
        console.error('Error al obtener Observaciones.')
        throw err;
    }
};

export const addObservation = async(id, user, content)=>{
    try{
        const response = await axios.post(`/api/Observation/${id}/${user}/${content}`);
        return response.data;
    }
    catch(err){
        console.error('Error al registrar observación.');
        throw err;
    }
}