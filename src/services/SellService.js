import axios from "axios";

//##############--GET--##############
export const getCustomerPlansById = async(id)=>{
    try{
        const response = await axios.get(`https://crmapi.somee.com/api/Sells/gSPD/${id}`);
        return response.data;
    }catch(err){
        console.error('Error al obtener ventas del usuario.');
        throw err;
    };
};

//##############--POST--##############
export const addSell = async(sell)=>{
    try{
        const response = await axios.post(`https://crmapi.somee.com/api/Sells/aS`, sell);
        return response.data;
    }catch(err){
        console.error('Error al registrar venta.');
        throw err;
    };
};