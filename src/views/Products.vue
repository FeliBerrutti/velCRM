<template>
    <div id="productsViewContainer">
        <div id="productsViewTitle">
            Planes
        </div>
        <div id="productsContainer"
        v-if="refPlan">
            <div class="productContent">
                <div class="productContentLabel">
                        <b>Plan</b>
                </div>
                <div class="productContentValue">
                    <b>Precio</b>
                </div>
            </div>
            <div class="productContent"
            v-for="(x, index) in refPlan"
                    :key="index"
                    @click="handleProductContentClick(index)"
                    tabindex="0">
                <div class="productContentLabel">
                    {{ x.name }}
                </div>
                <div class="productContentValue">
                    {{ x.price }}
                </div>
            </div>
            <!-- AÑADIR PLAN MODAL -->
            <div class="optionsPlansModal"
                    v-if="isAddPlanVisible">
                <class id="optionsPlansTitle">
                    Agregar Plan
                </class>
                <form class="optionsPlansForm">
                    <div class="optionsPlanInputContainer"
                            v-for="(x, index) in optionsPlanList"
                            :key="index">
                        <div class="optionsPlanInputLabel">
                            {{ x }}
                        </div>
                        <input class="optionsPlanInput" type="text"
                                v-model="addProductsRef[index]">
                    </div>
                </form>
                <div class="textAreaTitle">
                    Detalles
                </div>
                <textarea class="optionsPlanTextArea" 
                              rows="60" v-model="addProductsRef[2]"></textarea>
                <button class="optionsPlansFormButton"
                        @click="handleRegisterProductButtonClick"><b>Agregar</b></button>
            </div>
            <!-- EDITAR PLAN -->
            <div class="optionsPlansModal"
            v-if="isUpdatePlanVisible">
                <div class="optionsPlansTitle">
                    Editar plan
                </div>
                <form class="optionsPlansForm" action="">
                    <div class="optionsPlanInputContainer"
                    v-for="(x, index) in optionsPlanList"
                    :key="index">
                        <div class="optionsPlanInputLabel">
                            {{ x }}
                        </div>
                        <input class="optionsPlanInput" type="text">
                    </div>
                </form>
                <div class="textAreaTitle">
                    Detalles
                </div>
                <textarea class="optionsPlanTextArea" 
                              rows="60"></textarea>
                <button class="optionsPlansFormButton"><b>Editar</b></button>
            </div>
        </div>
        <!-- DETALLES -->
        <div id="productDetailsContainer">
            <div id="productDetailsContent"
                    >
                {{ refProductDetails }}
            </div>
        </div>
        <div id="productsOptionsContainer">
            <button class="productsOptionsButton"
            @click="handleUpdatePlanButtonClick"><b>Editar</b></button>
            <button class="productsOptionsButton"
                    @click="deleteProduct"><b>Eliminar</b></button>
            <button class="productsOptionsButton"
                    @click="handleAddPlanButtonClick"><b>Registrar</b></button>
        </div>
    </div>
</template>

<style scoped>
    #productsViewContainer{
        width: 100%;
        padding: 0.1%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #productsViewTitle{
        width: 20%;
        padding: 1%;
    }

    #productsContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 90%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(150,150,150,0.9);
        overflow: scroll;
    }

    .productContent{
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

    .productContent:focus{
        background-color: rgba(100,100,100,0.7);
    }

    .productContentLabel{
        border: 2px solid black;
        border-radius: 5px;
        width: 30%;
        padding: 1%;
        background-color: rgba(240,240,240,0.9);
    }

    .productContentValue{
        border: 2px solid black;
        border-radius: 5px;
        width: 50%;
        padding: 1%;
        background-color: rgba(240,240,240,0.9);
    }

    .productContentMembers{
        border: 2px solid black;
        border-radius: 5px;
        width: 10%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(240,240,240,0.9);
    }

    #productsOptionsContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 95%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgba(150,150,150,0.9);
    }

    .productsOptionsButton{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        width: 17%;
        background-color: rgba(0, 0, 255, 0.477);
        color: white;
    }

    .optionsPlansModal{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        background-color: rgb(150,150,150);
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .optionsPlansTitle{
        width: 30%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .optionsPlansForm{
        width: 80%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .optionsPlanInputContainer{
        border: 2px solid black;
        border-radius: 5px;
        width: 80%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(240,240,240,0.7);
    }

    .optionsPlanInputLabel{
        width: 22%;
        padding: 0.1%;
        display: flex;
        flex-direction: column;
    }

    .optionsPlanInput{
        border: 2px solid black;
        border-radius: 5px;
        width: 50%;
        padding: 0.5%;
    }

    .optionsPlanTextArea{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
    }

    .optionsPlansFormButton{
        border: 2px solid black;
        border-radius: 5px;
        width: 20%;
        padding: 1%;
        background-color: rgba(0, 0, 255, 0.477);
        color: white;
    }
    
    #productDetailsContainer{
        border: 2px solid black;
        border-radius: 5px;
        width: 95%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(150,150,150,0.9);
        overflow: scroll;
    }

    #productDetailsContent{
        border: 2px solid black;
        border-radius: 5px;
        width: 90%;
        padding: 1%;
        background-color: rgba(240,240,240,0.9);
    }

    @media(max-width: 820px){
        #productsViewContainer{
            min-height: 600px;
            max-height: 600px;
            min-width: 585px;
            max-width: 585px;
        }

        #productsContainer{
            min-height: 300px;
            max-height: 300px;
            min-width: 560px;
            max-width: 560px;
            margin-top: 1%;
        }

        .productContent{
            min-height: 35px;
            max-height: 35px;
            min-width: 530px;
            max-width: 530px;
            margin-bottom: 1%;
        }

        .productContentLabel{
            min-height: 21px;
            max-height: 21px;
            min-width: 120px;
            max-width: 120px;
            margin-right: 2%;
        }

        .productContentValue{
            min-height: 21px;
            max-height: 21px;
            min-width: 100px;
            max-width: 100px;
            margin-right: 2%;
        }

        .productContentMembers{
            min-height: 21px;
            max-height: 21px;
            min-width: 70px;
            max-width: 70px;
        }

        #productsOptionsContainer{
            min-height: 40px;
            max-height: 40px;
            min-width: 560px;
            max-width: 560px;
            margin-top: 3%;
        }

        .productsOptionsButton{
            min-height: 30px;
            max-height: 30px;
            min-width: 95px;
            max-width: 95px;
            margin: 3%;
        }

        .optionsPlansModal{
            min-height: 400px;
            max-height: 400px;
            min-width: 520px;
            max-width: 520px;
            top: 12%;
        }

        .optionsPlansForm{
            min-height: 170px;
            max-height: 170px;
            min-width: 320px;
            max-width: 320px;
        }

        .optionsPlanInputContainer{
            min-height: 30px;
            max-height: 30px;
            min-width: 250px;
            max-width: 250px;
            margin-top: 2%;
        }

        .optionsPlanInputLabel{
            min-height: 23px;
            max-height: 23px;
            min-width: 70px;
            max-width: 70px;
            margin-right: 2%;
        }

        .optionsPlanInput{
            min-height: 20px;
            max-height: 20px;
            min-width: 150px;
            max-width: 150px;
        }

        .optionsPlanTextArea{
            min-width: 500px;
            margin-top: 1%;
        }

        .optionsPlansFormButton{
            min-height: 30px;
            max-height: 30px;
            min-width: 100px;
            max-width: 100px;
            margin-top: 2%;
        }

        #productDetailsContainer{
            min-height: 140px;
            max-height: 140px;
            min-width: 560px;
            max-width: 560px;
            margin-top: 2%;
        }

        #productDetailsContent{
            min-height: 125px;
        }
    }

</style>

<script setup>
    import { ref } from 'vue';
    import { getAllPlans, getPlanByID, addPlan, deletePlan } from '@/services/PlanService';
    import { Plan } from '@/models/Plan';

    const refPlan = ref(null);
    const errorMsg = ref('');
    const isAddPlanVisible = ref(false);
    const isUpdatePlanVisible = ref(false);

    const refPlanClick = ref(null);
    const refProductDetails = ref(null);

    const optionsPlanList = ref(['Plan','Precio'])
    const addProductsRef = ref(Array(optionsPlanList.value.length).fill(''));

    function handleAddPlanButtonClick(){
        isAddPlanVisible.value = !isAddPlanVisible.value;
    };

    function handleUpdatePlanButtonClick(){
        isUpdatePlanVisible.value = !isUpdatePlanVisible.value;
    };

    const searchPlans = async()=>{
        try{
            const output = await getAllPlans();
            refPlan.value = output;
        }catch(err){
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