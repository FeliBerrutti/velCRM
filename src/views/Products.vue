<template>
    <!-- DIV SPINNER -->
     <div class="productsViewContainer" style="justify-content: center;"
     v-if="isSpinnerVisible">
        <Spinner></Spinner>
     </div>
    <div class="productsViewContainer"
    v-if="refPlan && !isSpinnerVisible">
        <div id="productsContainerTitle">
                <span><b>Plan</b></span>
                <span><b>Precio</b></span>
        </div>
        <div id="productsContainer"
        v-if="refPlan">
            <div
            v-for="(x, index) in refPlan"
                    :key="index"
                    @click="handleProductContentClick(index)"
                    tabindex="0">
                <span>{{ x.name }}</span>
                <span>${{ x.price }}</span>
            </div>
        </div>
        <!-- AÑADIR PLAN MODAL -->
        <div class="optionsPlansModal"
        v-if="isAddPlanVisible">
            <h3>Agregar Plan</h3>
            <form class="optionsPlansForm">
                <div
                v-for="(x, index) in optionsPlanList"
                :key="index">
                    <span>{{ x }}</span>
                    <input type="text"
                     v-model="addProductsRef[index]">
                </div>
            </form>
            <h4>Detalles</h4>
            <textarea rows="60" v-model="addProductsRef[2]"></textarea>
            <button @click="handleRegisterProductButtonClick"><b>Agregar</b></button>
        </div>
        <!-- EDITAR PLAN -->
        <div class="optionsPlansModal"
        v-if="isUpdatePlanVisible">
            <h3>Editar plan</h3>
            <form class="optionsPlansForm" action="">
                <div class="optionsPlanInputContainer"
                v-for="(x, index) in optionsPlanList"
                :key="index">
                    <span>{{ x }}</span>
                    <input type="text">
                </div>
            </form>
            <h4>Detalles</h4>
            <textarea rows="60"></textarea>
            <button><b>Editar</b></button>
        </div>
        <!-- DETALLES -->
        <div id="productDetailsContainer">
            <p>{{ refProductDetails }}</p>
        </div>
    </div>
</template>

<style scoped>
    .productsViewContainer{
        width: 100%;
        padding: 0.1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        h3{
            width: 20%;
            padding: 1%;
            margin: 0;
        }
        button:hover{
            cursor: pointer;
        }
    }

    #productsContainerTitle{
        border: 2px solid black;
        border-radius: 10px;
        width: 95%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgba(240,240,240,0.7);
        span{
            border: 2px solid black;
            border-radius: 5px;
            width: 25%;
            padding: 1%;
            background-color: rgba(240,240,240,0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    #productsContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 95%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(150,150,150,0.9);
        overflow: overlay;
        scrollbar-width: none;
        ::-webkit-scrollbar{
            display: none;
        }
        div{
            border: 2px solid black;
            border-radius: 10px;
            width: 95%;
            padding: 0.5%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: rgba(240,240,240,0.7);
        }
        span{
            border: 1.8px solid black;
            border-radius: 5px;
            width: 25%;
            padding: 1%;
            background-color: rgba(240,240,240,0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        :hover{
            cursor: pointer;
        }
        :focus{
            background-color: rgba(100,100,100,0.7);
        }
    }

    #productsOptionsContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 96%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgba(150,150,150,0.9);
        button{
            border: 2px solid black;
            border-radius: 5px;
            padding: 1%;
            width: 17%;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .optionsPlansModal{
        border: 2px solid black;
        border-radius: 5px;
        width: 50%;
        padding: 1%;
        background-color: rgb(150,150,150);
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 30%;
            margin: 0;
        }
        h4{
            margin: 0;
        }
        textarea{
            width: 90%;
            border: 2px solid black;
            border-radius: 5px;
            padding: 1%;
        }
        button{
            border: 2px solid black;
            border-radius: 5px;
            width: 20%;
            padding: 1%;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
        }
    }

    .optionsPlansForm{
        width: 95%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        input{
            border: 2px solid black;
            border-radius: 5px;
            width: 70%;
            padding: 0.5%;
        }
        div{
            border: 2px solid black;
            border-radius: 5px;
            width: 70%;
            padding: 1%;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: rgba(240,240,240,0.7);
        }
        span{
            width: 22%;
            padding: 0.1%;
            display: flex;
            flex-direction: column;
        }
    }

    #productDetailsContainer{
        border: 2px solid black;
        border-radius: 5px;
        width: 95%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(150,150,150,0.9);
        overflow: overlay;
        scrollbar-width: none;
        ::-webkit-scrollbar{
            display: none;
        }
        p{
            border: 2px solid black;
            border-radius: 5px;
            width: 90%;
            padding: 1%;
            background-color: rgba(240,240,240,0.9);
            margin: 0;
            text-align: start;
            overflow-wrap: break-word;
            word-wrap: break-word;
        }
    }

    @media(min-width: 820px) and (max-width: 1024px){
        .productsViewContainer{
            min-height: 600px;
            max-height: 650px;
        }

        #productsContainerTitle{
            min-height: 35px;
            max-height: 35px;
            span{
                min-height: 21px;
                max-height: 21px;
                margin-right: 2%;
            }
        }

        #productsContainer{
            min-height: 350px;
            max-height: 350px;
            div{
                min-height: 35px;
                max-height: 35px;
                margin-bottom: 1%;
            }
            span{
                min-height: 21px;
                max-height: 21px;
                margin-right: 2%;
            }
        }

        #productsOptionsContainer{
            min-height: 40px;
            max-height: 40px;
            margin-top: 3%;
            button{
                min-height: 30px;
                max-height: 30px;
                margin: 3%;
            }
        }

        .optionsPlansModal{
            min-height: 400px;
            max-height: 400px;
            top: 12%;
            textarea{
                margin-top: 1%;
            }
            button{
                min-height: 30px;
                max-height: 30px;
                margin-top: 2%;
            }
        }

        .optionsPlansForm{
            min-height: 170px;
            max-height: 170px;
            input{
                min-height: 20px;
                max-height: 20px;
            }
            div{
                min-height: 30px;
                max-height: 30px;
                margin-top: 2%;
            }
            span{
                min-height: 23px;
                max-height: 23px;
                margin-right: 2%;
            }
        }

        #productDetailsContainer{
            min-height: 160px;
            max-height: 160px;
            margin-top: 2%;
            p{
                min-height: 125px;
            }
        }
    }

    @media(min-width: 1025px){
        .productsViewContainer{
            min-height: 670px;
            max-height: 670px;
        }

        #productsContainerTitle{
            min-height: 35px;
            max-height: 35px;
            width: 85%;
            span{
                min-height: 21px;
                max-height: 21px;
                margin-right: 2%;
            }
        }

        #productsContainer{
            min-height: 350px;
            max-height: 350px;
            width: 86%;
            margin-bottom: 1%;
            div{
                min-height: 35px;
                max-height: 35px;
                margin-bottom: 1%;
                width: 97%;
                padding: 1%;
            }
            span{
                min-height: 21px;
                max-height: 21px;
                margin-right: 2%;
            }
        }

        #productsOptionsContainer{
            width: 86%;
            min-height: 40px;
            max-height: 40px;
            margin-top: 1%;
            button{
                min-height: 30px;
                max-height: 30px;
                min-width: 120px;
                max-width: 120px;
                margin: 3%;
            }
        }

        .optionsPlansModal{
            min-height: 400px;
            max-height: 400px;
            top: 12%;
            textarea{
                margin-top: 1%;
            }
            button{
                min-height: 30px;
                max-height: 30px;
                margin-top: 2%;
            }
        }

        .optionsPlansForm{
            min-height: 170px;
            max-height: 170px;
            input{
                min-height: 20px;
                max-height: 20px;
            }
            div{
                min-height: 30px;
                max-height: 30px;
                margin-top: 2%;
            }
            span{
                min-height: 23px;
                max-height: 23px;
                margin-right: 2%;
            }
        }

        #productDetailsContainer{
            min-height: 220px;
            max-height: 220px;
            width: 86%;
            p{
                min-height: 195px;
                max-height: 195px;
            }
        }
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { getAllPlans, getPlanByID, addPlan, deletePlan } from '@/services/PlanService';
    import { Plan } from '@/models/Plan';
    import Spinner from '@/components/Spinner.vue';

    const refPlan = ref(null);
    const errorMsg = ref('');
    const isAddPlanVisible = ref(false);
    const isUpdatePlanVisible = ref(false);

    const refPlanClick = ref(null);
    const refProductDetails = ref(null);

    const optionsPlanList = ref(['Plan','Precio'])
    const addProductsRef = ref(Array(optionsPlanList.value.length).fill(''));

    //CONSTANTE SPINNER
    const isSpinnerVisible = ref(false);
    //FUNCIONES SPINNER
    const showSpinner = ()=>{
        if(!isSpinnerVisible.value){
            isSpinnerVisible.value = true;
        }
    };

    const closeSpinner = ()=>{
        if(isSpinnerVisible.value){
            isSpinnerVisible.value = false;
        }
    };

    function handleAddPlanButtonClick(){
        isAddPlanVisible.value = !isAddPlanVisible.value;
    };

    function handleUpdatePlanButtonClick(){
        isUpdatePlanVisible.value = !isUpdatePlanVisible.value;
    };

    const searchPlans = async()=>{
        try{
            showSpinner();
            const response = await getAllPlans();
            if(response){
                closeSpinner();
                refPlan.value = response;
            }
        }catch(err){
            closeSpinner();
            console.log(err);
        };
    }

    const handleProductContentClick = (index)=>{
        refPlanClick.value = refPlan.value[index];
        refProductDetails.value = refPlanClick.value.details;
    };

    const handleRegisterProductButtonClick = async ()=>{
        try{
            const auxAddPlan = {
                name: addProductsRef.value[0],
                price: addProductsRef.value[1],
                details: addProductsRef.value[2],
                sells: 0,
                downs: 0
            };
            await addPlan(auxAddPlan);
            console.log('Plan registrado con exito.');
            handleAddPlanButtonClick();
            searchPlans();
        }catch(err){
            console.error('Error al registrar plan, ', err);
        };
    };

    const deleteProduct = async()=>{
        try{
            await deletePlan(refPlanClick.value.id);
            console.log('Plan eliminado con exito.');
            refPlanClick.value = null;
            refProductDetails.value = null;
            searchPlans();
        }catch(err){
            console.error(err);
        };
    };

    searchPlans();
</script>