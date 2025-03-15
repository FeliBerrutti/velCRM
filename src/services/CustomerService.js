import axios from 'axios';

//##############--GET--##############

export const getCustomerByDNI = async(dni)=>{
    try{
        const response = await axios.get(`https://crmapi.somee.com/api/Customers/gbD/${dni}`);
        return response.data;
    }catch(err){
        console.log('Error al obtener cliente. CustomerService');
        throw err;
    }
};


export const getPMbyID = async(id)=>{
    try{
        const response = await axios.get(`https://crmapi.somee.com/api/Customers/gPMbI/${id}`);
        return response.data;
    }catch(err){
        console.error('Error al obtener metodos de pago.');
        throw err;
    };
};


//##############--POST--##############
export const addCustomer = async(customer)=>{
    try{
        const response = await axios.post(`https://crmapi.somee.com/api/Customers/aC`, customer);
        return response.data;
    }catch(error){
        console.log('Error al añadir cliente.');
        throw error;
    };
};


