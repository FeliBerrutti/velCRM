<template>
    <div id="searchViewContainer">
        <div id="searchViewTitle">
            <b>Buscar</b>
        </div>
        <div id="searchContainer">
            <div id="searchContainerLabel">
                DNI:
            </div>
            <input v-model="customerId" id="searchContainerInput" type="text"/>
            <button id="searchContainerButton"
                    @click="searchCustomer">BUSCAR</button>
        </div>
        <div id="searchViewResultsLabel">
            <b>Resultados</b>
        </div>
        <div id="resultsContainer"
            v-if="customer">
            <div class="resultContent"
                        v-for="(x, index) in customerList" :key="index"
                        >
                <div class="resultContentLabel">
                    {{ x }}
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
            <!-- <div id="resultContentValueObservations">
                <div class="observationValue"
                            v-for="(x, index) in observationValueList" :key="index">
                    <div class="observationValueLabel">
                        {{ x }}
                    </div>
                    <div class="observationValueContent">

                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style scoped>
    #searchViewContainer{
        border: 2px solid blue;
        width: 100%;
    }

    #searchContainer{
        border: 2px solid black;
        width: 60%;
        padding: 1%;
        display: flex;
        flex-direction: row;
    }

    #searchContainerLabel{
        border: 2px solid red;
        width: 15%;
        padding: 0.1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #searchContainerInput{
        width: 30%;
    }

    #resultsContainer{
        border: 2px solid black;
        width: 96.5%;
        padding: 1%;
        display: flex;
        flex-direction: column;
    }

    .resultContent{
        border: 2px solid red;
        width: 50%;
        padding: 0.1%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .resultContentLabel{
        border: 2px solid blue;
        width: 28%;
        padding: 0.1%;
    }

    .resultContentValue{
        border: 2px solid black;
        width: 65%;
        padding: 0.1%;
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
        }

        #searchContainerLabel{
            min-height: 16px;
            max-height: 16px;
            min-width: 40px;
            max-width: 40px;
            margin-right: 1%;
        }

        #searchContainerInput{
            min-height: 15px;
            max-height: 15px;
            min-width: 100px;
            max-width: 100px;
            margin-right: 2%;
        }

        #resultsContainer{
            min-height: 200px;
            max-height: 200px;
            min-width: 570px;
            max-width: 570px;
        }

        .resultContent{
            min-height: 25px;
            max-height: 25px;
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
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { fetchCustomerById } from '@/services/customers';

    const customerId = ref('');
    const customer = ref(null);
    const errorMsg = ref('');
    const auxCustomer = ref([]);

    const searchCustomer = async() =>{
        try{
            customer.value = await fetchCustomerById(customerId.value);
            // console.log(customer);
            errorMsg.value = '';
        }
        catch(err){
            errorMsg.value = err;
            customer.value = null;
        }
    };

    const customerList = ['Nombre','Apellido','DNI','Nacimiento','Alta','Baja','Plan'];
</script>