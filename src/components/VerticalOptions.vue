<template>
    <div id="verticalOptionsContainer">
        <div class="verticalOption"
        v-for="(x, index) in optionsList" 
        :key="index" @click="handleOptionClick(index)"
        v-if="!isLoginView">
            <span><b>{{ x }}</b></span>
        </div>
    </div>
    <!-- MODAL MENSAJE DE ERROR -->
    <ErrorModal
        :refErrorModalMSG="refErrorMSG"
        :isErrorModalVisible="auxIsErrorModalVisible"
        @confirmErrorMSG="handleIsErrorModalVisible"
     ></ErrorModal>
</template>

<style scoped>
    #verticalOptionsContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 15%;
        height: 94vh;
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
    import ErrorModal from './ErrorModal.vue';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { watch } from 'vue';

    const route = useRoute();
    const isLoginView = ref(false);

    //Constantes modal mensaje de error
    const auxIsErrorModalVisible = ref(false);
    const refErrorMSG = ref('');

    //### FUNCIONES MODAL MENSAJE DE ERROR
    const handleIsErrorModalVisible = (aux)=>{
        if(!auxIsErrorModalVisible.value){
            refErrorMSG.value = aux;
            auxIsErrorModalVisible.value = true;
        }else{
            auxIsErrorModalVisible.value = false;
            refErrorMSG.value = '';
        };
    };

    const handleOptionClick = (index)=>{
        index === 0 ?
        router.push('/search/ ') :
        index === 1 ?
        router.push('/customerRegister') :
        index === 2 ? 
        router.push('/products') :
        index === 3 ?
        handleIsErrorModalVisible('Usted no posee los permisos necesarios para ingresar a esta sección.') :
        index === 4 ?
        handleIsErrorModalVisible('Usted no posee los permisos necesarios para ingresar a esta sección.') :
        console.log('Cerrar sesión.')
    }

    const optionsList = ['Buscar','Registrar','Planes','Reportes','Usuarios','Cerrar Sesión'];

    onMounted(() => {
  isLoginView.value = route.name === 'login';
});

// Actualiza la condición cuando cambias de ruta
watch(route, (newRoute) => {
  isLoginView.value = newRoute.name === 'login';
});
    
</script>