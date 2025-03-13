<template>
    <div id="searchViewContainer">
        <div id="searchContainer">
            <span>
                DNI:
            </span>
            <input v-model="customerId" id="searchContainerInput" type="text"/>
            <button @click="searchCustomer"><b>BUSCAR</b></button>
        </div>
        <!-- ##############--DIV USUARIOS--############## -->
        <div id="resultsContainer"
            v-if="customer">
            <!-- ##############--DIV MODAL IZQUIERDA--############## -->
            <div id="leftContent">
                <div class="resultContent"
                            v-for="(x, index) in customerList" :key="index"
                            >
                    <h5>
                        {{ x }}:
                    </h5>
                    <span>
                        {{ index === 0 ?
                            customer[0].name :
                            index === 1 ?
                            customer[0].lastName :
                            index === 2 ?
                            customer[0].dni :
                            index === 3 ?
                            customer[0].birthday :
                            index === 4 ?
                            customer[0].registered :
                            index === 5 ?
                            customer[0].out :
                            customer[0].plan }}
                    </span>
                </div>
                <div id="leftContentButtonsContainer">
                    <button @click="handleIsPlansModalVisible"><b>Planes</b></button>
                    <button @click="handleIsPMVisible()"><b>Info de pago</b></button>
                </div>
            </div>
            <!-- ##############--DIV MODAL DERECHA--############## -->
            <div id="rightContent">
                <!-- ##############--MODAL VER PLANES--############## -->
                <div class="searchCustomerViewModal"
                v-if="isPlansModalVisible">
                    <div class="modalValuesContainer">
                        <div class="modalValueTitle">
                            <span v-for="(x, index) in plansModalContentList"
                            :key="index">{{ x }}</span>
                        </div>
                        <div class="modalValues">
                            <div class="modalValue"
                            v-for="(x, index) in refPlans"
                            :key="index"
                            @click="handleRefPlansClick(index)"
                            tabindex="0">
                                <span>{{ x.planName }}</span>
                                <span>{{ x.date }}</span>
                                <span>{{ x.stateDate }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="searchCustomerViewModalButtonsContainer">
                        <button @click="handleIsAddPlanModalVisible()"><b>Alta</b></button>
                        <button @click="handleConfirmDownsModal()"><b>Baja</b></button>
                    </div>
                </div>
                 <!-- ##############--METODOS DE PAGO--############## -->
                <div class="searchCustomerViewModal"
                v-if="isPMVisible">
                    <div class="modalValue"
                    v-for="(x, index) in customerPayMethodOptions"
                    :key="index">
                        <span>{{ x }}</span>
                        <div class="modalPMValueContent">
                            {{ customerPMV[0][index] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ##############--OBSERVACIONES--############## -->
        <div id="resultContentValueObservations"
        v-if="customer">
                <h4>
                    <b>Observaciones</b>
                </h4>
                <div id="observationValueContentContainer"
                v-if="customerOb">
                    <div class="observationValue"
                    v-for="(x, index) in customerOb"
                    :key="index">
                        <span class="observationValueDate">
                            {{ x.date }}
                        </span>
                        <span class="observationValueContent">
                            {{ x.content }}
                        </span>
                    </div>
                    <div id="AddObservationContainer"
                        v-if="isAddObservationVisible">
                        <h4>
                            <b>Agregar observación</b>
                        </h4>
                        <textarea id="addObservationTextArea" 
                        rows="28"   v-model="observationContent"></textarea>
                        <div id="addObservationButtonsContainer">
                            <button @click="addNewObservation"><b>Agregar</b></button>
                            <button @click="handleIsObservationVisible"><b>Cancelar</b></button>
                        </div>
                    </div>
                </div>
                <button @click="handleIsObservationVisible"><b>Nueva</b></button>
         </div>
         <!-- ##############--DAR DE ALTA NUEVO PLAN--############## -->
         <div id="addSellContainer"
         v-if="isAddPlanModalVisible">
            <div class="addSellContent">
                <span><b>Nombre</b></span>
                <span><b>Precio</b></span>
            </div>
            <div id="addSellContentContainer">
                <div class="addSellContent"
                v-for="(x, index) in refAllPlans"
                :key="index" tabindex="0"
                @click="handleAllPlansContentClick(index)">
                    <span>{{ x.name }}</span>
                    <span>${{ x.price }}</span>
                </div>
            </div>
            <div id="addSellButtonsContainer">
                <button @click="handleConfirmSellsModal()"><b>Alta</b></button>
                <button @click="handleIsAddPlanModalVisible()"><b>Cancelar</b></button>
            </div>
         </div>
    </div>
     <!-- MODAL CONFIRMACIÓN EMITIR BAJAS -->
    <ConfirmationModal 
      :refMSG="`¿Está seguro de que desea emitir la baja del plan seleccionado?`"
      :isVisible="isConfirmationDownModalVisible"
      @onConfirm="handleModalDownsConfirm"
    />
    <!-- MODAL CONFIRMACIÓN EMITIR ALTAs -->
    <ConfirmationModal 
      :refMSG="`¿Dar de alta el plan seleccionado?`"
      :isVisible="isConfirmationSellModalVisible"
      @onConfirm="handleModalSellsConfirm"
    />
    <!-- MODAL MENSAJE DE ERROR -->
     <ErrorModal
        :refErrorModalMSG="refErrorMSG"
        :isErrorModalVisible="auxIsErrorModalVisible"
        @confirmErrorMSG="handleIsErrorModalVisible"
     ></ErrorModal>
</template>

<style scoped>
    #searchViewContainer{
        width: 100%;
        height: auto;
        button:hover{
            cursor: pointer;
        }
    }

    #searchContainer{
        border: 2px solid black;
        border-radius: 5px;
        width: 60%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        background-color: rgba(150,150,150,0.9);
        span{
            width: 15%;
            padding: 0.1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 0;
        }
        button{
            border: 2px solid black;
            border-radius: 5px;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
            width: 28%;
        }
    }

    #searchContainerInput{
        width: 30%;
        border: 1.7px solid black;
        border-radius: 5px;
    }

    #resultsContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 98%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        background-color: rgba(150,150,150,0.9);
    }

    #leftContent{
        padding: 0.1%;
        display: flex;
        flex-direction: column;
        width: 40%;
        height: auto;
    }

    .resultContent{
        width: 98%;
        padding: 0.1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        h5{
            width: 28%;
            padding: 0.1%;
            width: 30%;
        }
        span{
            width: 68%;
            padding: 0.1%;
            width: 58%;
        }
    }

    #resultContentValueObservations{
        border: 2px solid black;
        border-radius: 10px;
        width: 98%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        background-color: rgba(150,150,150,0.9);
        h4{
            width: 20%;
            padding: 1%;
            margin: 0;
        }
        button{
            border: 2px solid black;
            border-radius: 5px;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
            width: 15%;
            margin: 1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-wrap: nowrap;
            text-overflow: ellipsis;
        }
    }

    #leftContentButtonsContainer{
        width: 97%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        button{
            border: 2px solid black;
            border-radius: 5px;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
            width: 30%;
            margin: 1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-wrap: nowrap;
            text-overflow: ellipsis;
        }
    }

    #rightContent{
        width: 60%;
    }

    .searchCustomerViewModal{
        border: 2px solid black;
        border-radius: 10px;
        width: 95%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(175,175,175,0.9);
    }

    #modalsButton{
        border: 2px solid black;
        width: 7%;
        padding: 1%;
    }

    .modalValuesContainer{
        border: 2px solid black;
        border-radius: 5px;
        width: 95%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(120,120,120,0.9);
        overflow: overlay;
        scrollbar-width: none;
        ::-webkit-scrollbar{
            display: none;
        }
        span{
            border: 2px solid black;
            border-radius: 5px;
            width: 30%;
            padding: 0.2%;
            background-color: rgb(240,240,240);
            text-wrap: nowrap;
            text-overflow: ellipsis;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .modalValueTitle{
        border: 2px solid black;
        border-radius: 5px;
        width: 95%;
        padding: 0.1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgba(240,240,240, 0.6);
    }

    .modalPMValueContent{
        border: 2px solid black;
        border-radius: 5px;
        width: 70%;
        padding: 0.1%;
        background-color: rgba(250,250,250,0.9);
    }

    .modalValues{
        padding: 0.5%;
        width: 98%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
    }

    /* todo!! */
    .modalValue{
        border: 2px solid black;
        border-radius: 5px;
        padding: 0.1%;
        width: 97%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgba(240,240,240, 0.6);
        span{
            border: 2px solid black;
            border-radius: 5px;
            width: 30%;
            padding: 0.2%;
            background-color: rgb(240,240,240);
            text-wrap: nowrap;
            text-overflow: ellipsis;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .modalValue:hover{
        cursor: pointer;
    }

    .modalValue:focus{
        background-color: rgb(100,100,100);
        div{
            background-color: rgb(50,50,100);
            color: white;
        }
    }

    .searchCustomerViewModalButtonsContainer{
        width: 98%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button{
            border: 2px solid black;
            border-radius: 5px;
            width: 25%;
            padding: 1%;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    #observationValueContentContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 97%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        overflow: overlay;
        scrollbar-width: none;
        ::-webkit-scrollbar{
            display: none;
        }
        background-color: rgba(175,175,175,0.9);
    }

    .observationValue{
        border: 2px solid black;
        border-radius: 10px;
        width: 98.5%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(240,240,240, 0.6);
        box-shadow: 2px 2px 0.1px 1px grey;
    }

    .observationValueDate{
        border-radius: 5px;
        width: 12%;
        padding: 0.1%;
    }

    .observationValueContent{
        width: 90%;
        padding: 0.2%;
        border: 1.6px solid black;
        border-radius: 10px;
        background-color: rgb(240,240,240);
    }

    #AddObservationContainer{
        border: 2px solid black;
        border-radius: 10px;
        background-color: rgb(208, 204, 204);
        position: fixed;
        padding: 1%;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h4{
            width: 30%;
            padding: 1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    #addObservationTextArea{
        width: 75%;
        padding: 1%;
        border: 2px solid black;
        border-radius: 10px;
    }

    #addObservationButtonsContainer{
        width: 50%;
        padding: 0.2%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button{
            width: 25%;
            padding: 0.5%;
            border: 2px solid black;
            border-radius: 5px;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
        }
    }

    #addSellContainer{
        border: 2px solid black;
        border-radius: 10px;
        background-color: rgb(110,110,110);
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }

    .addSellContent{
        border: 2px solid black;
        background-color: rgb(185,185,185);
        border-radius: 5px;
        width: 80%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        span{
            border: 2px solid black;
            background-color: rgb(240,240,240);
            border-radius: 5px;
            width: 40%;
            padding: 1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .addSellContent:hover{
        cursor: pointer;
    }

    .addSellContent:focus{
        background-color: rgb(100,100,100);
        span{
            background-color: rgb(50,50,100);
            color: white;
        }
    }
    
    #addSellContentContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 95%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: overlay;
        scrollbar-width: none;
        ::-webkit-scrollbar{
            display: none;
        }
        background-color: rgb(80,80,80);
        
    }

    #addSellButtonsContainer{
        width: 90%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button{
            border: 2px solid black;
            border-radius: 5px;
            width: 25%;
            padding: 1%;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    @media(min-width: 820px){
        #searchViewContainer{
            min-height: 610px;
        }

        #searchContainer{
            min-height: 20px;
            max-height: 30px;
            min-width: 310px;
            max-width: 310px;
            margin-top: 2%;
            margin-left: 2%;
            span{
                min-height: 16px;
                max-height: 16px;
                margin-right: 1%;
                margin-top: 0.5%;
            }
            button{
                min-height: 25px;
                max-height: 25px;
            }
            input{
                min-height: 19px;
                max-height: 19px;
                min-width: 150px;
                max-width: 150px;
                margin-right: 2%;
            }
        }

        #resultsContainer{
            margin-top: 1%;
            min-height: 240px;
            max-height: 240px;
        }

        #leftContent{
            max-height: 210px;
        }

        .resultContent{
            min-height: 20px;
            max-height: 22px;
            margin-top: 0.5%;
            h5{
                min-height: 20px;
                max-height: 20px;
                margin-right: 0;
            }
            span{
                min-height: 20px;
                max-height: 20px;
            }
        }

        #leftContentButtonsContainer{
            min-height: 40px;
            max-height: 40px;
            margin-top: 3%;
            button{
                min-height: 25px;
                max-height: 25px;
            }
        }

        #rightContent{
            min-height: 212px;
            max-height: 212px;
        }

        .searchCustomerViewModal{
            min-height: 200px;
            max-height: 300px;
        }

        .modalValuesContainer{
            min-height: 150px;
            max-height: 150px;
            margin-top: 2%;
            span{
                min-height: 18px;
                max-height: 18px;
            }
        }

        .modalValueTitle{
            min-height: 25px;
            max-height: 25px;
        }

        .modalPMValueContent{
            min-height: 17px;
            max-height: 17px;
        }

        .modalValues{
            min-height: 90px;
            max-height: 90px;
        }

        .modalValue{
            min-height: 25px;
            max-height: 25px;
            margin: 0.5%;
            span{
                min-height: 18px;
                max-height: 18px;
            }
        }

        #modalsButton{
            margin-right: -85%;
            max-height: 20px;
        }

        .searchCustomerViewModalButtonsContainer{
            min-height: 25px;
            max-height: 25px;
            margin-top: 1%;
            button{
                min-height: 25px;
                max-height: 25px;
                margin-left: 1%;
                margin-right: 1%;
            }
        }

        #resultContentValueObservations{
            margin-top: 2.5%;
            min-height: 285px;
            max-height: 300px;
            h4{
                min-height: 22px;
                max-height: 22px;
            }
            button{
                min-height: 25px;
                max-height: 25px;
            }
        }

        #observationValueContentContainer{
            min-height: 200px;
            max-height: 200px;
        }

        .observationValue{
            min-height: 45px;
            max-height: 45px;
            margin-top: 1%;
        }

        .observationValueDate{
            min-height: 25px;
            max-height: 25px;
        }

        .observationValueContent{
            min-height: 40px;
            max-height: 40px;
        }

        #AddObservationContainer{
            min-height: 250px;
            max-height: 300px;
            max-width: 550px;
            top: 20%;
            left: 23%;
            h4{
                min-height: 25px;
                max-height: 25px;
            }
        }

        #addObservationTextArea{
            min-height: 150px;
            max-height: 150px;
            margin-top: 1%;
        }

        #addObservationButtonsContainer{
            margin-top: 1%;
            min-height: 30px;
            max-height: 30px;
            button{
                min-height: 25px;
                max-height: 25px;
                margin-left: 1.5%;
                margin-right: 1.5%;
            }
        }

        #addSellContainer{
            min-height: 320px;
            max-height: 320px;
            top: 10%;
            left: 25%;
        }

        .addSellContent{
            min-height: 25px;
            margin-top: 2%;
            span{
                min-height: 20px;
                max-height: 20px;
                margin-left: 1%;
                margin-right: 1%;
            }
        }

        #addSellContentContainer{
            min-height: 210px;
            max-height: 210px;
        }

        #addSellButtonsContainer{
            min-height: 25px;
            max-height: 25px;
            button{
                min-height: 25px;
                max-height: 25px;
                margin-left: 1%;
                margin-right: 1%;
            }
        }
    }

    @media(min-width: 1329px){
        #addSellContainer{
            min-height: 320px;
            max-height: 320px;
        }

        #resultContentValueObservations{
            margin-top: 0.2%;
        }

        #searchContainer{
            margin-top: 0%;
        }

        #resultsContainer{
            margin-top: 0%;
        }

        .modalValue{
        border: 2px solid black;
        min-height: 35px;
        margin-bottom: 0.5%;
        span{
            width: 30%;
        }
        div{
            width: 75%;
        }
        }

        #resultContentValueObservations{
            min-height: 350px;
            max-height: 350px;
        }

        #observationValueContentContainer{
            min-height: 250px;
            max-height: 250px;
        }
    }
</style>

<script setup>
    import { defineProps, onMounted, ref } from 'vue';
    import { getCustomerByDNI, getPMbyID } from '@/services/CustomerService';
    import { addObservation, getObservationByCI } from '@/services/ObservationService';
    import { getCustomerPlansById, addSell } from '@/services/SellService';
    import { addPlan, getAllPlans } from '@/services/PlanService';
    import { addDown } from '@/services/DownService';
    import ConfirmationModal from '@/components/ConfirmationModal.vue';
    import ErrorModal from '@/components/ErrorModal.vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const props = defineProps({
        searchValue: {
            type: String
        }
    });




    //Usuario generico
    const userId = 1;


    //Constantes Customers
    const customerId = ref('');
    const customer = ref(null);
    const customerOb = ref(null);

    const customerList = ['Nombre','Apellido','DNI','Nacimiento',
                            'Alta'];
    
    const customerPayMethodOptions = ['CBU','Num tarjeta','Cod Seguridad','Vencimiento'];
    const customerPMV = ref(null);
    const isPMVisible = ref(false);


    const errorMsg = ref('');
    const isAddObservationVisible = ref(false);
    const observationContent = ref('');

    const plansModalContentList = ref(['Nombre','Alta','Baja']);

    //Constantes Plans
    
    const isPlansModalVisible = ref(false);
    const isAddPlanModalVisible = ref(false);

    const refPlans = ref(null);
    const refPlansClick = ref(null);
    const refAllPlans = ref(null);
    const refAllPlansContentClick = ref(null);


    function handleIsObservationVisible(){
        if(!isAddObservationVisible.value){
            isAddObservationVisible.value = true;
        }else{
            isAddObservationVisible.value = false;
        }
    }

    //Constante Modal Confirmaciones bajas
    const isConfirmationDownModalVisible = ref(false);

    //Constante Modal confirmaciones ventas
    const isConfirmationSellModalVisible = ref(false);

    //Constantes modal mensaje de error
    const auxIsErrorModalVisible = ref(false);
    const refErrorMSG = ref('');


//FUNCIONES CUSTOMER

    //BACK
    //todo!!
    // const searchCustomer = async()=>{
    //     try{
    //         closeModals();
    //         customer.value = await getCustomerByDNI(customerId.value);
    //         console.log('Cliente obtenido con exito.');
    //         console.log('Cliente: ' + customer.value[0].name);
    //         console.log('DNI: ' + customerId.value);
    //         customerOb.value = await getObservationByCI(customer.value[0].id);
    //         console.log('Observaciones obtenidas con exito.');
    //     }catch(err){
    //         console.error(err);
    //     };
    // };
    const searchCustomer = async () => {
        try {
            closeModals();
            const auxCustomerId = ref(customerId.value.trim());
            const response = await getCustomerByDNI(auxCustomerId.value);
            console.log('verificando response: ' + response);
            if (response && response.length > 0) {
                customer.value = response;
                console.log('Cliente:', customer.value[0].dni);
                console.log('DNI:', customerId.value);
                if (customer.value[0].id) {
                    customerOb.value = await getObservationByCI(customer.value[0].id);
                    console.log('Observaciones obtenidas con éxito.');
                } else {
                    console.error('El cliente no tiene un id válido.');
                };
            } 
            else {
                console.error('No se encontró el cliente.');
            }
        } 
        catch (err) {
            console.error(err);
        }
    };


    const getPMbI = async()=>{
        try{
            customerPMV.value = await getPMbyID(customer.value[0].id);
            console.log('Metodos de pago traídos con exito.');
            console.log(customerPMV.value);
        }catch(err){
            console.error('Error al traer metodos de pago.', err);
        };
    };

    //FRONT
    const handleIsPMVisible = ()=>{
        if(!isPMVisible.value){
            getPMbI();
            isPlansModalVisible.value = false;
            console.log(customerPMV.value);
            isPMVisible.value = true;
        }else{
            isPMVisible.value = false;
        };
    };

    const handleIsPlansModalVisible = ()=>{
        if(!isPlansModalVisible.value){
            isPMVisible.value = false;
            getPlansById();
            isPlansModalVisible.value = true;
        }else{
            isPlansModalVisible.value = false;
        };
    };

    const handleRefPlansClick = (index)=>{
        refPlansClick.value = refPlans.value[index];
    };

    const handleIsAddPlanModalVisible = ()=>{
        if(!isAddPlanModalVisible.value){
            isAddPlanModalVisible.value = true;
            searchPlans();
        }else{
            isAddPlanModalVisible.value = false;
        };
    };

//FUNCIONES OBSERVATIONS

    //BACK
    const addNewObservation = async()=>{
        try{
            const auxOb = {
                customerId: customer.value[0].id,
                userId: userId,
                content: observationContent.value
            };
            await addObservation(auxOb);
            handleIsObservationVisible();
            searchCustomer();
           
        }catch(err){
            console.error(err);
        };
    };

    //Funciones Plans

    //FRONT

    const handleAllPlansContentClick = (index)=>{
        refAllPlansContentClick.value = refAllPlans.value[index];
        console.log(refAllPlansContentClick.value);
    };

    

    //BACK
    const getPlansById = async()=>{
        try{
            refPlans.value = await getCustomerPlansById(customer.value[0].id);
            console.log(refPlans.value[0].sellID);
            console.log('Ventas traidas con exito.');
        }catch(err){
            console.error('Error al traer ventas.', err);
        };
    };


    const searchPlans = async()=>{
        try{
            refAllPlans.value = await getAllPlans();
            console.log('Planes traídos exitosamente.');
        }catch(err){
            console.error('Error al traer planes.', err);
        };
    };

    //FUNCIONES GENERALES
    const closeModals = ()=>{
        isPMVisible.value = false;
        isPlansModalVisible.value = false;
        isAddObservationVisible.value = false;
    };

    //---------------FUNCIONES MODALS

    //###Modal confirmación Registrar bajas
    const handleConfirmDownsModal = ()=>{
        if(refPlansClick.value === null){
            refErrorMSG.value = 'Debe seleccionar un plan haciendo click sobre el.';
            handleIsErrorModalVisible();
        }else{
            if(!isConfirmationDownModalVisible.value){
            isConfirmationDownModalVisible.value = true;
            }else{
                isConfirmationDownModalVisible.value = false;
            };
        }
        
    };

    //BOTONES
    const handleModalDownsConfirm = async(output) => {
        console.log('handleModalConfirm ejecutada.', output);
        handleConfirmDownsModal();
        
        if(output){
            try{
                const auxDown = {
                    sellID: refPlansClick.value.sellID,
                    userID: userId 
                };
            await addDown(auxDown);
            console.log('Baja registrada con exito.');
            getPlansById();
            }catch(err){
                console.error('Error al registrar la baja.', err);
            };
        }
    };

    //###Modal confirmación registrar altas
    const handleConfirmSellsModal = ()=>{

        if(refAllPlansContentClick.value === null){
            refErrorMSG.value = 'Debe seleccionar uno de los planes haciendo click sobre el.'
            handleIsErrorModalVisible();
        }else{
            if(!isConfirmationSellModalVisible.value){
            isConfirmationSellModalVisible.value = true;
            }else{
                isConfirmationSellModalVisible.value = false;
            };
        };
    };

    //BOTONES
    const handleModalSellsConfirm = async(output) => {
        console.log('handleModalSellsConfirm ejecutada.', output);
        if(output){
            try{
            const auxSell = {
                userId: userId,
                customerId: customer.value[0].id,
                planId: refAllPlansContentClick.value.id,
                state: true
            };
            console.log(auxSell);
            await addSell(auxSell);
            console.log('Plan dado de alta con éxito.');
            getPlansById();
            handleConfirmSellsModal();
            handleIsAddPlanModalVisible();
            }catch(err){
                console.error('Error al dar de alta el plan.', err);
            }
        }else{
            handleConfirmSellsModal();
        };
    };

    //### MODAL MENSAJE DE ERROR
    const handleIsErrorModalVisible = ()=>{
        console.log('Entrando a handleIsErrorModalVisible.');
        if(!auxIsErrorModalVisible.value){
            auxIsErrorModalVisible.value = true;
        }else{
            auxIsErrorModalVisible.value = false;
            refErrorMSG.value = '';
        };
    };

    // todo!!
    onMounted(()=>{
    if(route.params.searchValue){
        customerId.value = route.params.searchValue;
        console.log(' probando onmounted' + customerId.value);
        searchCustomer();
    }
    });
</script>