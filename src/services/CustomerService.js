import axios from 'axios';

export const addCustomer = async(customer)=>{
    try{
        const response = await axios.post(`/api/Customers/aC`, customer);
        return response.data;
    }catch(error){
        console.log('Error al añadir cliente.');
        throw error;
    };
};

export const getCustomerByDNI = async(dni)=>{
    try{
        const response = await axios.get(`api/Customers/gbD/${dni}`);
        return response.data;
    }catch(err){
        console.log('Error al obtener cliente. CustomerService');
        throw err;
    }
}