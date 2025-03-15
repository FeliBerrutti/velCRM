import axios from "axios";

export const getObservationByCI = async(ci)=>{
    try{
        const response = await axios.get(`https://crmapi.somee.com/api/Observations/gBCD/${ci}`);
        return response.data;
    }catch(err){
        console.log('Error al obtener observaciones.');
        throw err;
    };
};

export const addObservation = async(observation)=>{
    try{
        const response = await axios.post(`https://crmapi.somee.com/api/Observations/aO`, observation);
        return response.data;
    }catch(err){
        console.log('Error al añadir observación');
        throw err;
    };
};

