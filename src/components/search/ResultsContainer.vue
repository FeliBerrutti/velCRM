<template>
    <div id="resultsContainer">
        <div class="resultContent"
                    v-for="(x, index) in resultValueList" :key="index">
            <div class="resultContentLabel">
                {{ x }}
            </div>
            <div class="resultContentValue">
            </div>
        </div>
        <div id="resultContentValueObservations">
            <div class="observationValue"
                        v-for="(x, index) in observationValueList" :key="index">
                <div class="observationValueLabel">
                    {{ x }}
                </div>
                <div class="observationValueContent">

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #resultsContainer{
        border: 2px solid black;
        width: 98%;
        padding: 0.5%;
    }

    .resultContent{
        border: 2px solid black;
        width: 65%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
    }

    .resultContentLabel{
        border: 2px solid blue;
        width: 35%;
        padding: 0.2%;
    }

    .resultContentValue{
        border: 2px solid red;
        width: 60%;
        padding: 0.2%;
    }

    #resultContentValueObservations{
        border: 2px solid black;
        width: 97%;
        padding: 1%;
    }

    .observationValue{
        border: 2px solid black;
        width: 100%;
        padding: 0.1%;
        height: auto;
    }

    @media(max-width: 820px){
        #resultsContainer{
            min-height: 485px;
            max-height: 485px;
        }

        .resultContent{
            min-height: 30px;
            max-height: 30px;
            min-width: 350px;
            max-width: 350px;
            margin-top: 2%;
        }

        .resultContentLabel{
            min-height: 25px;
            max-height: 25px;
            min-width: 122px;
            max-width: 122px;
            margin-right: 1%;
        }

        .resultContentValue{
            min-height: 25px;
            max-height: 25px;
            min-width: 210px;
            max-width: 210px;
        }

        #resultContentValueObservations{
            min-height: 110px;
            max-height: 110px;
            min-width: 558px;
            max-width: 558px;
            margin-top: 1%;
        }
    }
</style>

<script setup>

    const resultValueList = ['Nombre','Apellido','DNI','Nacimiento','Alta','Baja','Plan'];
    const observationValueList = ['Fecha','Hora','Operador','Observación'];

</script>