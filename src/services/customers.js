import axios from "axios";

export const fetchCustomerById = async(id)=>{
    try{
        const response = await axios.get(`/api/Customer/${id}`);
    return response.data;
    }
    catch(err){
        console.error('Error al obtener cliente.');
        throw err;
    }
}

export const addCustomer = async(name, lastName, DNI, plan)=>{
    try{
        const response = await axios.post(`/api/Customer/${name}/${lastName}/${DNI}/${plan}`);
        return response.data;
    }
    catch(err){
        console.log('Error al registrar cliente');
        throw err;
    }
}