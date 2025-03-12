<template>
    <div id="verticalOptionsContainer">
        <div class="verticalOption"
        v-for="(x, index) in optionsList" 
        :key="index" @click="handleOptionClick(index)">
            <span><b>{{ x }}</b></span>
        </div>
    </div>
</template>

<style scoped>
    #verticalOptionsContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 15%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(200,200,200,0.7);
    }

    .verticalOption{
        border: 2px solid black;
        border-radius: 10px;
        width: 99%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(240,240,240,0.7);
        box-shadow: 2px 2px 1px 1px grey;
    }

    .verticalOption:hover{
        cursor: pointer;
    }

    @media(min-width: 821px){
        #verticalOptionsContainer{
            min-height: 605px;
            max-height: 700px;
        }

        .verticalOption{
            min-height: 30px;
            max-height: 30px;
            margin-bottom: 5%;
        }
    }
</style>

<script setup>
    import router from '@/router';

    const handleOptionClick = (index)=>{
        index === 0 ?
        router.push('/search') :
        index === 1 ?
        router.push('/customerRegister') :
        router.push('/products')
    }

    const optionsList = ['Buscar','Registrar','Planes']
</script>