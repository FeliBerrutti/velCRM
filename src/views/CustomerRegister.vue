<template>
    <div id="userRegisterViewContainer">
        <div id="userRegisterViewTitle">
            Registrar Cliente
        </div>
        <form id="userRegisterForm" action="">
            <!-- <div id="userFormRegisterLeft"> -->
                <div class="userRegisterFormInputContainer"
                v-for="(x, index) in customerAttribList"
                        :key="index">
                    <div class="userRegisterFormInputLabel">
                        {{ x }}
                    </div>
                    <select 
                    v-model="refPayMethodsList" 
                    v-if="index === 4"
                    class="userRegisterFormInput">
                        <option v-for="(x, index) in payMethodsList"
                        :key="index" :value="x">
                            {{ x }}
                        </option>
                    </select>
                    <input v-if="index !== 4 && index !==5" v-model="customerValues[index]"  class="userRegisterFormInput" type="text">
                </div>
                <!-- #1 -->
                <div class="userRegisterFormInputContainer"
                v-if="refPayMethodsList === 'CBU'">
                    <div class="userRegisterFormInputLabel">
                        CBU
                    </div>
                    <input class="userRegisterFormInput" type="text"
                    v-model="auxPayCBU">
                </div>
                <!-- #2 -->
                <div 
                class="userRegisterFormInputContainer"
                v-for="(x, index) in creditCardDataList"
                :key="index"
                v-if="refPayMethodsList === 'Tarjeta de crédito'">
                    <div class="userRegisterFormInputLabel">
                        {{ x }}
                    </div>
                    <input class="userRegisterFormInput" type="text"
                    v-model="auxPayCC[index]">

                </div>
        </form>
        <button @click="handleConfirmAddCustomerModal()" class="userRegisterFormButton"><b>Registrar</b></button>
        <!-- MODAL CONFIRMACIÓN REGISTRAR CLIENTE -->
         <!-- TODO!! -->
    <ConfirmationModal 
      :refMSG="`¿¿Registrar nuevo cliente?`"
      :isVisible="isConfirmationAddModalVisible"
      @onConfirm="handleModalAddConfirm"
    />
    </div>
</template>

<style scoped>
    #userRegisterViewContainer{
        width: 100%;
        padding: 0.1%;
    }

    #userRegisterViewTitle{
        width: 20%;
        padding: 0.1%;
    }

    #userRegisterForm{
        padding: 1%;
        width: 95%;
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        border-radius: 5px;
        background-color: rgba(150,150,150,0.9);
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

    .userRegisterFormInputLabel{
        width: 30%;
        padding: 0.1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .userRegisterFormInput{
        width: 50%;
        padding: 0.1%;
        border: 1.5px solid black;
        border-radius: 5px;
    }

    .userRegisterFormButton{
        width: 15%;
        padding: 0.5%;
        border: 2px solid black;
        border-radius: 5px;
        background-color: rgb(0, 0, 255, 0.9);
        color: white;
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
        }

        #userRegisterViewTitle{
            min-height: 25px;
            max-height: 25px;
        }

        #userRegisterForm{
            min-height: 190px;
            max-height: 340px;
            min-width: 565px;
            max-width: 565px;
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

        .userRegisterFormInputLabel{
            min-height: 20px;
            max-height: 20px;
            min-width: 140px;
            max-width: 150px;
            margin-right: 3%;
        }

        .userRegisterFormInput{
            min-height: 20px;
            max-height: 20px;
            min-width: 160px;
            max-width: 160px;
        }

        .userRegisterFormButton{
            min-height: 28px;
            max-height: 28px;
            min-width: 80px;
            max-width: 80px;
            margin-top: 2%;
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

    const add = async () => {
    
    };

    //Funciones modal confirmación registrar cliente
    const handleConfirmAddCustomerModal = ()=>{
        if(!isConfirmationAddModalVisible.value){
            isConfirmationAddModalVisible.value = true;
        }else{
            isConfirmationAddModalVisible.value = false;
        };
    };

    //BOTONES
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