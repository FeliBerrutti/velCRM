<template>
    <div id="loginViewContainer">
        <div id="loginContainer">
            <div id="loginTitle">
                <b>Iniciar Sesión</b>
            </div>
                <form id="loginForm" action="">
                    <div class="loginFormInputContainer">
                        <div class="loginFormInputText">
                            Usuario
                        </div>
                        <input class="loginFormInput" type="text"
                                v-model="auxN">
                    </div>
                    <div class="loginFormInputContainer">
                        <div class="loginFormInputText">
                            Contraseña
                        </div>
                        <input class="loginFormInput" type="password"
                                v-model="auxP">
                    </div>
                </form>
                <button id="loginFormButton"
                        @click="login"><b>Ingresar</b></button>
        </div>
    </div>
</template>

<style scoped>
    #loginViewContainer{
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
    }

    #loginTitle{
        width: 40%;
        padding: 1%;
        text-align: center;
    }

    #loginForm{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
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
    }

    .loginFormInputText{
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

    .loginFormInput{
        border: 2px solid black;
        border-radius: 10px;
        width: 55%;
    }

    #loginFormButton{
        border: 3px solid black;
        border-radius: 5px;
        width: 30%;
        padding: 1%;
        background-color: rgba(0, 0, 255, 0.477);
        color: white;
    }

    @media(max-width: 820px){
        #loginContainer{
            min-width: 400px;
            max-width: 400px;
            min-height: 200px;
            max-height: 200px;
        }

        #loginTitle{
            margin-top: 2%;
        }

        #loginForm{
            min-width: 380px;
            max-width: 380px;
            min-height: 120px;
            max-height: 120px;
        }

        .loginFormInputContainer{
            min-height: 35px;
            max-height: 35px;
            min-width: 350px;
            max-width: 350px;
        }

        .loginFormInputText{
            min-height: 31px;
            max-height: 31px;
            min-width: 100px;
            max-width: 100px;
            margin-left: 5%;
        }

        .loginFormInput{
            min-height: 30px;
            max-height: 30px;
            min-width: 195px;
            max-width: 195px;
            margin-left: 5%;
        }

        #loginFormButton{
            min-height: 30px;
            max-height: 30px;
            min-width: 110px;
            max-width: 110px;
            margin-top: 2%;
        }
    }

</style>

<script setup>
    import { ref } from 'vue';
    import { loginUser } from '@/services/users';

    const errMsg = ref('');
    const userRef = ref(null);
    // const auxU = ref(null);
    const auxN = ref('');
    const auxP = ref('');
    const auxU = ref([auxN.value,auxP.value]);

    const login = async()=>{
        console.log(auxN.value,auxP.value);
        try{
            userRef.value = await loginUser(auxN.value,
                                            auxP.value);
            console.log('Usuario logueado.');
            errMsg.value = '';
        }catch(err){
            errMsg.value = err;
            userRef.value = null;
            console.log(errMsg.value);
        }
    }


</script>