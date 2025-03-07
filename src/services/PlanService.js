import axios from "axios";

//##############--GET--##############
export const getPlanByID = async(id)=>{
    try{
        const response = await axios.get(`/api/Plans/gPbI/${id}`);
        return response.data
    }catch(err){
        console.log('Error al obtener datos del plan.');
        throw err;
    };
};

export const getAllPlans = async()=>{
    try{
        const response = await axios.get(`/api/Plans/gAP`);
        return response.data;
    }catch(err){
        console.log('Error al obtener información de planes. PlanService.js');
        throw err;
    };
};

//##############--POST--##############
export const addPlan = async(plan)=>{
    try{
        const response = await axios.post(`api/Plans/aP`, plan);
        return response.data;
    }catch(err){
        console.error('Error al agregar plan.');
        throw err;
    };
};

//##############--DELETE--##############
export const deletePlan = async(id)=>{
    try{
        const response = await axios.delete(`/api/Plans/dP/${id}`);
        return response.data;
    }catch(err){
        console.error('Error al eliminar plan.');
        throw err;
    };
};