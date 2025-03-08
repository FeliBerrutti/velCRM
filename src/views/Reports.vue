<template>
    <div id="reportsViewContainer">
        <h3>Reportes</h3>
        <div id="reportsContentOption">
            <button @click="handleClickReportsOptionPlans"><b>Planes</b></button>
            <button @click="handleClickReportsOptionUsers"><b>Usuarios</b></button>
        </div>
        <!-- PLANES -->
        <div id="reportsContentContainer"
        v-if="isPlansReportVisible">
            <div class="reportsContentHeader">
                <h4>PLANES</h4>
                <div class="reportsContentDate">
                    <button @click="handleClickViewPlanMensual">Mensual</button>
                    <button @click="handleClickViewPlanAnual">Anual</button>
                </div>
            </div>
            <!-- PLANES MENSUAL -->
            <div class="reportContentBody"
                    v-if="isPlanMensualVisible">
                <h4>Reporte Mensual</h4>
                <div class="reportContentBodyContainer">
                    <div class="reportContent">
                        <span
                        v-for="(x, index) in reportContentList"
                        :key="index">
                            {{ x }}
                        </span>
                    </div>
                </div>
            </div>
            <!-- PLANES ANUAL -->
            <div class="reportContentBody"
                v-if="isPlanAnualVisible">
                <h4>Reporte Anual</h4>
                <div class="reportContentBodyContainer">
                    <div class="reportContent">
                        <span
                        v-for="(x, index) in reportContentList"
                        :key="index">
                            {{ x }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- USUARIOS -->
        <div id="reportsContentContainer"
            v-if="isUsersReportVisible">
            <div class="reportsContentHeader">
                <h4>Usuarios</h4>
                <div class="reportsContentDate">
                    <button @click="handleClickViewUserMensual">Mensual</button>
                    <button @click="handleClickViewUserAnual">Anual</button>
                </div>
            </div>
            <!-- USUARIOS MENSUAL -->
            <div class="reportContentBody"
            v-if="isUserMensualVisible">
                <h4>Reporte Mensual</h4>
                <div class="reportContentBodyContainer">
                    <div class="reportContent">
                        <span
                        v-for="(x, index) in reportContentList"
                        :key="index">
                            {{ x }}
                    </span>
                    </div>
                </div>
            </div>
            <!-- USUARIOS ANUAL -->
            <div class="reportContentBody"
                v-if="isUserAnualVisible">
                <h4>Reporte Anual</h4>
                <div class="reportContentBodyContainer">
                    <div class="reportContent">
                        <span
                        v-for="(x, index) in reportContentList"
                        :key="index">
                            {{ x }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #reportsViewContainer{
        border: 2px solid black;
        border-radius: 5px;
        width: 98%;
        padding: 1%;
        background-color: rgba(150,150,150,0.9);
        display: flex;
        flex-direction: column;
        align-items: center;
        h3{
            width: 15%;
            padding: 1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
        }
    }

    #reportsContentOption{
        border: 2px solid black;
        border-radius: 5px;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button{
            border: 2px solid black;
            border-radius: 3px;
            padding: 0.5%;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
        }
    }

    #reportsContentContainer{
        border: 2px solid black;
        border-radius: 5px;
        padding: 0.1%;
        background-color: rgba(100,100,100,0.9);
    }

    .reportsContentHeader{
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        h4{
            margin: 0;
            margin-left: 43%;
        }
    }

    .reportsContentDate{
        border: 2px solid black;
        border-radius: 5px;
        padding: 0.1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button{
            border: 1.5px solid black;
            border-radius: 5px;
            padding: 0.1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
        }
    }

    .reportContentBody{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        background-color: rgba(220,220,220,0.8);
        h4{
            margin: 0;
        }
    }

    .reportContentBodyContainer{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        background-color: rgba(70,70,70,0.9);
    }

    .reportContent{
        border: 2px solid black;
        border-radius: 5px;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        span{
            border: 2px solid black;
            border-radius: 5px;
            padding: 1%;
        }
    }

    .reportContentValue{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
    }

    @media(max-width: 820px){
        #reportsContentOption{
            min-width: 140px;
            max-width: 140px;
            min-height: 30px;
            max-height: 30px;
            button{
                min-width: 68px;
                max-width: 68px;
            }
        }

        #reportsContentContainer{
            min-width: 570px;
            max-width: 570px;
            min-height: 497px;
            max-height: 497px;
            margin-top: 1%;
        }

        .reportsContentBody{
            min-height: 220px;
            max-height: 220px;
            min-width: 550px;
            max-width: 550px;
            margin-top: 1.5%;
        }

        .reportsContentContainer{
            min-height: 180px;
            max-height: 180px;
            min-width: 535px;
            max-width: 535px;
            margin-top: 1%;
        }

        .reportsContentContainerValue{
            min-height: 25px;
            max-height: 25px;
            min-width: 520px;
            max-width: 520px;
        }

        .reportsContentDate{
            margin-left: 18%;
            min-width: 140px;
            max-width: 140px;
            min-height: 25px;
            max-height: 25px;
            button{
                min-width: 60px;
                max-width: 60px;
                min-height: 20px;
                max-height: 20px;
            }
        }

        .reportContentBody{
            min-height: 435px;
            max-height: 435px;
            min-width: 550px;
            max-width: 550px;
            margin-top: 1%;
        }

        .reportContentBodyContainer{
            min-height: 385px;
            max-height: 385px;
            min-width: 535px;
            max-width: 535px;
            margin-top: 2%;
        }

        .reportContent{
            min-height: 30px;
            max-height: 30px;
            min-width: 525px;
            max-width: 525px;
            span{
                min-height: 17px;
                max-height: 17px;
                min-width: 50px;
                margin: 1%;
            }
        }

        .reportContentValue{
            min-height: 17px;
            max-height: 17px;
            min-width: 50px;
            margin: 1%;
        }
    }
</style>

<script setup>
    import { ref } from 'vue';

    const reportContentList = ref(['Plan','Precio','Total Vendido','Bajas']);

    const isPlansReportVisible = ref(false);
    const isUsersReportVisible = ref(true);

    const isPlanMensualVisible = ref(true);
    const isPlanAnualVisible = ref(false);

    const isUserMensualVisible = ref(true);
    const isUserAnualVisible = ref(false);

    function handleClickReportsOptionPlans(){
        if(isUsersReportVisible.value === true){
            isUsersReportVisible.value = false;
        };

        if(!isPlansReportVisible.value){
            isPlansReportVisible.value = true;
        };
    };

    function handleClickReportsOptionUsers(){
        if(isPlansReportVisible.value === true){
            isPlansReportVisible.value = false;
        };

        if(!isUsersReportVisible.value){
            isUsersReportVisible.value = true;
        };
    };

    function handleClickViewPlanMensual(){
        if(isPlanAnualVisible.value === true){
            isPlanAnualVisible.value = false;
        };
        if(!isPlanMensualVisible.value){
            isPlanMensualVisible.value = true;
        };
    };

    function handleClickViewPlanAnual(){
        if(isPlanMensualVisible.value === true){
            isPlanMensualVisible.value = false;
        };
        if(!isPlanAnualVisible.value){
            isPlanAnualVisible.value = true;
        };
    };

    function handleClickViewUserMensual(){
        if(isUserAnualVisible.value === true){
            isUserAnualVisible.value = false;
        };
        if(!isUserMensualVisible.value){
            isUserMensualVisible.value = true;
        };
    };

    function handleClickViewUserAnual(){
        if(isUserMensualVisible.value === true){
            isUserMensualVisible.value = false;
        };
        if(!isUserAnualVisible.value){
            isUserAnualVisible.value = true;
        };
    };

</script>