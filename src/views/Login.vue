<template>
    <!-- DIV SPINNER -->
    <div class="loginViewContainer" style="justify-content: center;"
    v-if="isSpinnerVisible">
        <Spinner></Spinner>
    </div>
    <div class="loginViewContainer" v-if="!isSpinnerVisible">
        <div id="loginContainer">
            <h3>Iniciar Sesión</h3>
                <form action="">
                    <div class="loginFormInputContainer">
                        <span>Usuario</span>
                        <input type="text" v-model="auxN">
                    </div>
                    <div class="loginFormInputContainer">
                        <span>Contraseña</span>
                        <input type="password" v-model="auxP">
                    </div>
                </form>
                <button @click="loginU()"><b>Ingresar</b></button>
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
    .loginViewContainer{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #loginContainer{
        width: 50%;
        border: 2px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(150,150,150,0.9);
        h3{
            width: 40%;
            padding: 1%;
            text-align: center;
            margin: 0;
        }
        button{
            border: 3px solid black;
            border-radius: 5px;
            width: 30%;
            padding: 1%;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
        }
        form{
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .loginFormInputContainer{
        border: 2px solid black;
        border-radius: 5px;
        width: 90%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        margin-top: 3%;
        background-color: rgba(240,240,240,0.7);
        span{
            border: 2px solid black;
            border-radius: 10px;
            width: 30%;
            padding: 0.1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(240,240,240,0.9);
        }
        input{
            border: 2px solid black;
            border-radius: 10px;
            width: 55%;
        }
    }

    @media(max-width: 820px){
        #loginContainer{
            min-width: 400px;
            max-width: 400px;
            min-height: 200px;
            max-height: 200px;
            h3{
                margin-top: 2%;
            }
            button{
                min-height: 30px;
                max-height: 30px;
                min-width: 110px;
                max-width: 110px;
                margin-top: 2%;
            }
            form{
                min-width: 380px;
                max-width: 380px;
                min-height: 120px;
                max-height: 120px;
            }
        }

        .loginFormInputContainer{
            min-height: 35px;
            max-height: 35px;
            min-width: 350px;
            max-width: 350px;
            span{
                min-height: 31px;
                max-height: 31px;
                min-width: 100px;
                max-width: 100px;
                margin-left: 5%;
            }
            input{
                min-height: 30px;
                max-height: 30px;
                min-width: 195px;
                max-width: 195px;
                margin-left: 5%;
            }
        }
    }

    @media(min-width: 821px) and (max-width: 960px){
        #loginContainer{
            min-width: 400px;
            max-width: 400px;
            min-height: 200px;
            max-height: 200px;
            h3{
                margin-top: 2%;
            }
            button{
                min-height: 30px;
                max-height: 30px;
                min-width: 110px;
                max-width: 110px;
                margin-top: 2%;
            }
            form{
                min-width: 380px;
                max-width: 380px;
                min-height: 120px;
                max-height: 120px;
            }
        }

        .loginFormInputContainer{
            min-height: 35px;
            max-height: 35px;
            min-width: 350px;
            max-width: 350px;
            span{
                min-height: 31px;
                max-height: 31px;
                min-width: 100px;
                max-width: 100px;
                margin-left: 5%;
            }
            input{
                min-height: 30px;
                max-height: 30px;
                min-width: 195px;
                max-width: 195px;
                margin-left: 5%;
            }
        }
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { Login } from '@/models/Login';
    import { loginUser } from '@/services/LoginService';
    import router from '@/router';
    import ErrorModal from '@/components/ErrorModal.vue';
    import Spinner from '@/components/Spinner.vue';

    //CONSTANTE SPINNER
    const isSpinnerVisible = ref(null);

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

    //Constantes Nombre y Password
    const auxN = ref('');
    const auxP = ref('');

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

    //INICIAR SESION
    const loginU = async()=>{
        try{
            showSpinner();
            var auxLogin = new Login;
            auxLogin.Nombre = auxN.value;
            auxLogin.Contraseña = auxP.value;
            console.log(auxLogin);
            const response = await loginUser(auxLogin);
            if(response){
                closeSpinner();
                router.push('/search/ ');
            }
        }catch(err){
            closeSpinner();
            handleIsErrorModalVisible('Credenciales incorrectas.')
        }
    }

</script>