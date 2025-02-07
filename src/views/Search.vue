<template>
    <div id="searchViewContainer">
        <div id="searchContainer">
            <div id="searchContainerLabel">
                DNI:
            </div>
            <input v-model="customerId" id="searchContainerInput" type="text"/>
            <button id="searchContainerButton"
                    @click="searchCustomer"><b>BUSCAR</b></button>
        </div>
        <div id="resultsContainer"
            v-if="customer">
            <div class="resultContent"
                        v-for="(x, index) in customerList" :key="index"
                        >
                <div class="resultContentLabel">
                    {{ x }}:
                </div>
                <div class="resultContentValue">
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
                </div>
            </div>
            <div id="resultContentValueObservations">
                <div class="observationValueLabel">
                    Observaciones
                </div>
                <div id="observationValueContentContainer"
                v-if="customerOb">
                    <div class="observationValue"
                    v-for="(x, index) in customerOb"
                    :key="index">
                        <div class="observationValueDate">
                            {{ x.date }}
                        </div>
                        <div class="observationValueContent">
                            {{ x.content }}
                        </div>
                    </div>
                    <div id="AddObservationContainer"
                        v-if="isAddObservationVisible">
                        <div id="addObservationTitle">
                            <b>Agregar observación</b>
                        </div>
                        <textarea id="addObservationTextArea" 
                        rows="28"   v-model="observationContent"></textarea>
                        <button id="addObservationButton"
                            @click="addNewObservation"><b>Agregar</b></button>
                    </div>
                </div>
                <button id="newObservationButton"
                        @click="handleIsObservationVisible"><b>Nueva</b></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #searchViewContainer{
        width: 100%;
    }

    #searchContainer{
        border: 2px solid black;
        border-radius: 5px;
        width: 60%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        background-color: rgba(150,150,150,0.9);
    }

    #searchContainerLabel{
        width: 15%;
        padding: 0.1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #searchContainerInput{
        width: 30%;
        border: 1.7px solid black;
        border-radius: 5px;
    }

    #searchContainerButton{
        border: 2px solid black;
        border-radius: 5px;
        background-color: rgba(0, 0, 255, 0.477);
        color: white;
        width: 30%;
    }

    #resultsContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 96.5%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        background-color: rgba(150,150,150,0.9);
    }

    .resultContent{
        width: 50%;
        padding: 0.1%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .resultContentLabel{
        width: 28%;
        padding: 0.1%;
    }

    .resultContentValue{
        width: 65%;
        padding: 0.1%;
    }

    #resultContentValueObservations{
        border: 2px solid black;
        border-radius: 10px;
        width: 96.5%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        background-color: rgba(150,150,150,0.9);
    }

    .observationValueLabel{
        width: 20%;
        padding: 1%;
    }

    #observationValueContentContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 90%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        overflow: scroll;
        background-color: rgba(175,175,175,0.9);
    }

    .observationValue{
        border: 2px solid black;
        border-radius: 10px;
        width: 99%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(240,240,240, 0.6);
        box-shadow: 2px 2px 0.1px 1px grey;
    }

    .observationValueDate{
        border-radius: 5px;
        width: 15%;
        padding: 0.1%;
    }

    .observationValueContent{
        width: 85%;
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
    }

    #addObservationTitle{
        width: 30%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #addObservationTextArea{
        width: 75%;
        padding: 1%;
        border: 2px solid black;
        border-radius: 10px;
    }

    #addObservationButton{
        width: 15%;
        padding: 0.5%;
        border: 2px solid black;
        border-radius: 5px;
        background-color: rgba(0, 0, 255, 0.477);
        color: white;
    }

    #newObservationButton{
        border: 2px solid black;
        border-radius: 5px;
        background-color: rgba(0, 0, 255, 0.477);
        color: white;
        width: 30%;
    }

    @media(max-width: 820px){
        #searchViewContainer{
            min-height: 600px;
            max-height: 600px;
            min-width: 590px;
            max-width: 590px;
        }

        #searchContainer{
            min-height: 20px;
            max-height: 20px;
            min-width: 250px;
            max-width: 250px;
            margin-top: 2%;
            margin-left: 2%;
        }

        #searchContainerLabel{
            min-height: 16px;
            max-height: 16px;
            min-width: 40px;
            max-width: 40px;
            margin-right: 1%;
        }

        #searchContainerInput{
            min-height: 19px;
            max-height: 19px;
            min-width: 100px;
            max-width: 100px;
            margin-right: 2%;
        }

        #searchContainerButton{
            min-height: 25px;
            max-height: 25px;
            min-width: 75px;
            max-width: 75px;
        }

        #resultsContainer{
            min-height: 210px;
            max-height: 210px;
            min-width: 575px;
            max-width: 575px;
            margin-top: 1%;
        }

        .resultContent{
            min-height: 25px;
            max-height: 25px;
            margin-top: 0.5%;
        }

        .resultContentLabel{
            min-height: 20px;
            max-height: 20px;
            min-width: 78px;
            max-width: 78px;
            margin-right: 1%;
        }

        .resultContentValue{
            min-height: 20px;
            max-height: 20px;
            min-width: 190px;
            max-width: 190px;
        }

        #resultContentValueObservations{
            min-height: 285px;
            max-height: 285px;
            min-width: 560px;
            max-width: 560px;
            margin-top: 4%;
        }

        .observationValueLabel{
            min-height: 22px;
            max-height: 22px;
            min-width: 100px;
            max-width: 100px;
        }

        #observationValueContentContainer{
            min-height: 200px;
            max-height: 200px;
            min-width: 540px;
            max-width: 540px;
        }

        .observationValue{
            min-height: 45px;
            max-height: 45px;
            min-width: 530px;
            max-width: 530px;
            margin-top: 1%;
        }

        .observationValueDate{
            min-height: 25px;
            max-height: 25px;
            min-width: 80px;
            max-width: 80px;
        }

        .observationValueContent{
            min-height: 40px;
            max-height: 40px;
            min-width: 440px;
            max-width: 440px;
        }

        #newObservationButton{
            min-height: 25px;
            max-height: 25px;
            min-width: 80px;
            max-width: 80px;
            margin-top: 1%;
        }

        #AddObservationContainer{
            min-height: 250px;
            max-height: 250px;
            min-width: 500px;
            max-width: 500px;
            top: 25%;
            left: 15%;
        }

        #addObservationTitle{
            min-height: 25px;
            max-height: 25px;
            min-width: 190px;
            max-width: 190px;
        }

        #addObservationTextArea{
            min-height: 150px;
            max-height: 150px;
            min-width: 430px;
            max-width: 430px;
            margin-top: 1%;
        }

        #addObservationButton{
            min-height: 25px;
            max-height: 25px;
            min-width: 70px;
            max-width: 70px;
            margin-top: 1.5%;
        }
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { fetchCustomerById } from '@/services/customers';
    import { getByDni, addObservation } from '@/services/observations';

    const customerId = ref('');
    const customer = ref(null);
    const customerOb = ref(null);
    const errorMsg = ref('');
    const isAddObservationVisible = ref(false);
    const observationContent = ref('');

    function handleIsObservationVisible(){
        if(!isAddObservationVisible.value){
            isAddObservationVisible.value = true;
        }else{
            isAddObservationVisible.value = false;
        }
    }

    const searchCustomer = async() =>{
        try{
            customer.value = await fetchCustomerById(customerId.value);
            customerOb.value = await getByDni(customerId.value);
            errorMsg.value = '';
        }
        catch(err){
            errorMsg.value = err;
            customer.value = null;
        }
    };

    const addNewObservation = async()=>{
        try{
            await addObservation(3, 'Usuario',observationContent.value);
            console.log('Observación añadida con éxito.');
            handleIsObservationVisible();
            window.location.reload();
        }catch(err){
            errorMsg.value = err;
            console.log(err);
        }
    };

    const customerList = ['Nombre','Apellido','DNI','Nacimiento','Alta','Baja','Plan'];
</script>