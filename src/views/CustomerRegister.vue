<template>
    <div id="userRegisterViewContainer">
        <h4>
            Registrar Cliente
        </h4>
        <form id="userRegisterForm" action="">
                <div class="userRegisterFormInputContainer"
                v-for="(x, index) in customerAttribList"
                        :key="index">
                    <span>
                        {{ x }}
                    </span>
                    <select 
                    v-model="refPayMethodsList" 
                    v-if="index === 4"
                    class="userRegisterFormInput">
                        <option v-for="(x, index) in payMethodsList"
                        :key="index" :value="x">
                            {{ x }}
                        </option>
                    </select>
                    <input v-if="index !== 4 && index !==5" v-model="customerValues[index]" type="text">
                </div>
                <!-- #1 -->
                <div class="userRegisterFormInputContainer"
                v-if="refPayMethodsList === 'CBU'">
                    <span>
                        CBU
                    </span>
                    <input type="text"
                    v-model="auxPayCBU">
                </div>
                <!-- #2 -->
                <div 
                class="userRegisterFormInputContainer"
                v-for="(x, index) in creditCardDataList"
                :key="index"
                v-if="refPayMethodsList === 'Tarjeta de crédito'">
                    <span>
                        {{ x }}
                    </span>
                    <input type="text"
                    v-model="auxPayCC[index]">
                </div>
        </form>
        <button @click="handleConfirmAddCustomerModal()" class=""><b>Registrar</b></button>
        <!-- MODAL CONFIRMACIÓN REGISTRAR CLIENTE -->
    <ConfirmationModal 
      :refMSG="`¿¿Registrar nuevo cliente?`"
      :isVisible="isConfirmationAddModalVisible"
      @onConfirm="handleModalAddConfirm"/>
    </div>
    <!-- MODAL MENSAJE DE ERROR -->
    <ErrorModal
        :refErrorModalMSG="refErrorMSG"
        :isErrorModalVisible="auxIsErrorModalVisible"
        @confirmErrorMSG="handleIsErrorModalVisible"
     ></ErrorModal>
</template>

<style scoped>
    #userRegisterViewContainer{
        width: 100%;
        padding: 0.1%;
        h4{
            width: 20%;
            padding: 0.1%;
            margin: 0;
        }
        button{
            width: 15%;
            padding: 0.5%;
            border: 2px solid black;
            border-radius: 5px;
            background-color: rgb(0, 0, 255, 0.9);
            color: white;
        }
    }

    #userRegisterForm{
        padding: 1%;
        width: 95%;
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        border-radius: 5px;
        background-color: rgba(150,150,150,0.9);
        span{
            width: 30%;
            padding: 0.1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        input, select{
            width: 50%;
            padding: 0.1%;
            border: 1.5px solid black;
            border-radius: 5px;
        }
    }

    #userFormRegisterLeft{
        display: flex;
        flex-direction: column;
    }

    #userFormRegisterRight{
        border: 2px solid black;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(120,120,120,0.8);
    }

    #userFormRegisterRightTitle{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(240,240,240,0.7);
    }

    .userFormRegisterRightContentContainer{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(240,240,240,0.7);
    }

    .userFormRegisterRightContent{
        padding: 0.5%;
    }

    .userRegisterFormInputContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 70%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(240,240,240,0.7);
    }

    #userRegisterFormObservationInput{
        width: 80%;
    }

    @media(max-width: 820px){
        #userRegisterViewContainer{
            min-height: 595px;
            max-height: 595px;
            min-width: 590px;
            max-width: 590px;
            h4{
                min-height: 25px;
                max-height: 25px;
            }
            button{
                min-height: 28px;
                max-height: 28px;
                min-width: 80px;
                max-width: 80px;
                margin-top: 2%;
            }
        }

        #userRegisterForm{
            min-height: 190px;
            max-height: 340px;
            min-width: 565px;
            max-width: 565px;
            span{
                min-height: 20px;
                max-height: 20px;
                min-width: 140px;
                max-width: 150px;
                margin-right: 3%;
            }
            input, select{
                min-height: 20px;
                max-height: 20px;
                min-width: 160px;
                max-width: 160px;
            }
        }

        #userFormRegisterLeft{
            min-height: 190px;
            max-height: 310px;
            min-width: 350px;
            max-width: 350px;
        }

        #userFormRegisterRight{
            min-height: 190px;
            max-height: 310px;
            min-width: 210px;
            max-width: 210px;
        }

        #userFormRegisterRightTitle{
            min-width: 50px;
            max-width: 50px;
            min-height: 17px;
            max-height: 17px;
            margin-top: 2%;
        }

        .userFormRegisterRightContentContainer{
            min-height: 20px;
            max-height: 20px;
            min-width: 100px;
            max-width: 180px;
            margin-top: 2%;
        }

        .userFormRegisterRightContent{
            min-height: 17px;
            max-height: 17px;
            min-width: 80px;
            max-width: 160px;
        }

        .userRegisterFormInputContainer{
            min-height: 26px;
            max-height: 26px;
            min-width: 340px;
            max-width: 340px;
            margin-top: 1.5%;
        }


        #userRegisterFormObservationInput{
            min-height: 170px;
            max-height: 170px;
            min-width: 470px;
            max-width: 470px;
        }
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { Customer } from '@/models/Customer';
    import { addCustomer } from '@/services/CustomerService';
    import ConfirmationModal from '@/components/ConfirmationModal.vue';
    import ErrorModal from '@/components/ErrorModal.vue';

    //Usuario generico
    const userID = 1;

    const customerAttribList = ref(['Nombre','Apellido','Nacimiento','DNI','Metodo de pago']);
    const customerValues = ref(Array(customerAttribList.value.length).fill(''));
    const payMethodsList = ref(['','CBU','Tarjeta de crédito']);
    const refPayMethodsList = ref('');
    const auxPayCBU = ref('');
    const auxPayCC = ref([]);

    const creditCardDataList = ref(['Numero de Tarjeta', 'Fecha Vencimiento', 'Codigo de seguridad']);

    //Constantes modal confirmación agregar cliente
    const isConfirmationAddModalVisible = ref(false);

     //### FUNCIONES MODAL MENSAJE DE ERROR
     const handleIsErrorModalVisible = (aux)=>{
        console.log('Entrando a handleIsErrorModalVisible.');
        if(!auxIsErrorModalVisible.value){
            refErrorMSG.value = aux;
            auxIsErrorModalVisible.value = true;
        }else{
            auxIsErrorModalVisible.value = false;
            refErrorMSG.value = '';
        };
    };

    //Constantes modal mensaje de error
    const auxIsErrorModalVisible = ref(false);
    const refErrorMSG = ref('');

    //todo!!
    //Funciones modal confirmación registrar cliente
    const handleConfirmAddCustomerModal = ()=>{
        const name = customerValues.value[0];
        const lastname = customerValues.value[1];
        const dni = customerValues.value[3];
        const birthday = customerValues.value[2];
        const cbu = auxPayCBU.value;
        const creditCardNumber = auxPayCC.value[0];
        const creditCardCode = auxPayCC.value[2];
        const creditCardExp = auxPayCC.value[1];
        const infoPay = refPayMethodsList.value;
        // console.log(`Nombre: ${name},
        //             apellido: ${lastname},
        //             dni : ${dni},
        //             cumpleaños: ${birthday},
        //             cbu: ${cbu},
        //             numero de tarjeta: ${creditCardNumber},
        //             codigo de seguridad: ${creditCardCode},
        //             fecha de vencimiento: ${creditCardExp}`);    

        var aprob = true;

        //VALIDACIONES CAMPO NOMBRE, APELLIDO, CUMPLEAÑOS, DNI, METODO DE PAGO
        
            //VALIDAR TODOS LOS CAMPOS
        if(name.trim() === '' &&
        lastname.trim() === '' &&
        dni.trim() === '' &&
        birthday.trim() === '' &&
        infoPay === ''){
            handleIsErrorModalVisible('Todos los campos son obligatorios.');
            aprob = false;
        };

        //VALIDAR NOMBRE
        if(name.trim() === '' &&
        lastname.trim() !== '' &&
        dni.trim() !== '' &&
        birthday.trim() !== '' &&
        infoPay !== ''){
            handleIsErrorModalVisible('Todos los campos son obligatorios.');
            aprob = false;
        };

        // //VALIDACIONES DNI
        // if(dni.trim().length < 8 ||
        //     dni.trim().length > 8){
        //         handleIsErrorModalVisible('Número de DNI debe tener 8 caracteres.');
        //         aprob = false;  
        //     };
        
        //VALIDACIONES NUMERO DE CBU
        if(infoPay === 'CBU' &&
                cbu.trim().length < 22 ||
                cbu.trim().length > 22
        ){
            handleIsErrorModalVisible('CBU debe tener 22 caracteres.');
            aprob = false;
        };

        if(infoPay === 'CBU' &&
            cbu.trim() !== '' )
        {}

        // //VALIDACIONES NUMERO DE TARJETA DE CRÉDITO
        // if(infoPay === 'Tarjeta de crédito' &&
        //     creditCardNumber.length < 14 ||
        //     creditCardNumber.length > 16){
        //         handleIsErrorModalVisible('El numero de tarjeta de crédito debe tener entre 14 y 16 dígitos.');
        //         aprob = false;
        //     };
        
        // //VALIDACIONES CODIGO DE SEGURIDAD
        // if(infoPay === 'Tarjeta de crédito' &&
        //     creditCardCode.length < 3 ||
        //     creditCardCode.length > 4){
        //         handleIsErrorModalVisible('El codigo de seguridad debe tener entre 3 y 4 dígitos.');
        //         aprob = false;
        //     };

        // //VALIDACIONES FECHA DE VENCIMIENTO
        // if(infoPay === 'Tarjeta de crédito' &&
        //     creditCardExp === ''){
        //         handleIsErrorModalVisible('Fecha de vencimiento es obligatoria.');
        //     };

        if(aprob === true){
            if(!isConfirmationAddModalVisible.value){
                isConfirmationAddModalVisible.value = true;
            }else{
                isConfirmationAddModalVisible.value = false;
            };
        }
    };

    //BOTONES

    //todo!!
    const handleAddCustomerConfirmations = ()=>{
        if(!customerValues){
            console.log('Todos los campos son obligatorios.');
        }
    }


    const handleModalAddConfirm = async(output) => {
        console.log('handleModalAddConfirm ejecutada.', output);
        handleConfirmAddCustomerModal();
        
        if(output){
            try {
            var auxCustomer = new Customer(
                null,null,null,null,null,null,null,null,null
            );

            if (refPayMethodsList.value === 'CBU') {
                auxCustomer = {
                    userId: userID,
                    name: customerValues.value[0],
                    lastName: customerValues.value[1],
                    dni: customerValues.value[3],
                    birthday: customerValues.value[2],
                    cbu: auxPayCBU.value,
                    creditCardNumber: '',
                    creditCardCode: '',
                    creditCardExp: ''
                };
            };

            if (refPayMethodsList.value === 'Tarjeta de crédito') {
                auxCustomer = {
                    userId: userID,
                    name: customerValues.value[0],
                    lastName: customerValues.value[1],
                    dni: customerValues.value[3],
                    birthday: customerValues.value[2],
                    cbu: '',
                    creditCardNumber: auxPayCC.value[0],
                    creditCardCode: auxPayCC.value[2],
                    creditCardExp: auxPayCC.value[1]
                };
            };

            await addCustomer(auxCustomer);
            console.log('Cliente añadido con éxito.');
        }catch (err) {
            console.error(err);
        }
    };
    };
</script>