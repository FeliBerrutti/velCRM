<template>
    <div id="verticalOptionsContainer">
        <div class="verticalOption"
        v-for="(x, index) in optionsList" :key="index">
            <div class="verticalOptionText">
                {{ x }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    #verticalOptionsContainer{
        border: 2px solid black;
        width: 20%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .verticalOption{
        border: 2px solid black;
        width: 99%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 820px){
        #verticalOptionsContainer{
            min-height: 600px;
            max-height: 600px;
            margin-top: 0.8%;
        }

        .verticalOption{
            min-height: 30px;
            max-height: 30px;
            min-width: 145px;
            max-width: 145px;
            margin-bottom: 5%;
        }
    }
</style>

<script setup>
    const optionsList = ['Buscar','Registrar','Planes','Usuarios','Cerrar Sesión']
</script>