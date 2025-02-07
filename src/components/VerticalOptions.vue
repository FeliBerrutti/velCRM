<template>
    <div id="verticalOptionsContainer">
        <div class="verticalOption"
        v-for="(x, index) in optionsList" 
        :key="index" @click="handleOptionClick(index)">
            <div class="verticalOptionText">
                <b>{{ x }}</b>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #verticalOptionsContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 20%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(200,200,200,0.2);
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
        background-color: sandybrown;
        box-shadow: 2px 2px 1px 1px pink;
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
    import router from '@/router';

    const handleOptionClick = (index)=>{
        index === 0 ?
        router.push('/search') :
        index === 1 ?
        router.push('/customerRegister') :
        index === 2 ? 
        router.push('/products') :
        index === 3 ?
        router.push('/users') :
        console.log('Cerrar sesión.')
    }

    const optionsList = ['Buscar','Registrar','Planes','Usuarios','Cerrar Sesión']
</script>