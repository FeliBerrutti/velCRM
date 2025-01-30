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
                        <input class="loginFormInput" type="text">
                    </div>
                    <div class="loginFormInputContainer">
                        <div class="loginFormInputText">
                            Contraseña
                        </div>
                        <input class="loginFormInput" type="password">
                    </div>
                    <button id="loginFormButton">Ingresar</button>
                </form>
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
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #loginTitle{
        border: 2px solid red;
        width: 40%;
        padding: 1%;
        text-align: center;
    }

    #loginForm{
        border: 2px solid green;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .loginFormInputContainer{
        border: 2px solid blue;
        width: 90%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        margin-top: 3%;
    }

    .loginFormInputText{
        border: 2px solid red;
        width: 30%;
        padding: 0.1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .loginFormInput{
        width: 55%;
    }

    #loginFormButton{
        border: 3px solid red;
        width: 30%;
        padding: 1%;
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
            min-height: 150px;
            max-height: 150px;
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

</script>