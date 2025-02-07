<template>
    <div id="userRegisterViewContainer">
        <div id="userRegisterViewTitle">
            Registrar Cliente
        </div>
        <form id="userRegisterForm" action="">
            <div class="userRegisterFormInputContainer"
            v-for="(x, index) in customerAttribList"
                    :key="index">
                <div class="userRegisterFormInputLabel">
                    {{ x }}
                </div>
                <input v-model="customerValues[index]"  class="userRegisterFormInput" type="text">
            </div>
            <button @click="add" id="userRegisterFormButton"><b>Registrar</b></button>
        </form>
    </div>
</template>

<style scoped>
    #userRegisterViewContainer{
        width: 100%;
        padding: 0.1%;
    }

    #userRegisterViewTitle{
        width: 20%;
        padding: 0.1%;
    }

    #userRegisterForm{
        padding: 1%;
        width: 95%;
        display: flex;
        flex-direction: column;
    }

    .userRegisterFormInputContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 70%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(240,240,240, 0.6);
    }

    .userRegisterFormInputLabel{
        width: 30%;
        padding: 0.1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .userRegisterFormInput{
        width: 50%;
        padding: 0.1%;
        border: 1.5px solid black;
        border-radius: 5px;
    }

    #userRegisterFormButton{
        width: 15%;
        padding: 0.5%;
        border: 2px solid black;
        border-radius: 5px;
        background: rgb(206, 88, 4);
        color: white;
    }

    #userRegisterFormObservationInput{
        width: 80%;
    }

    @media(max-width: 820px){
        #userRegisterViewContainer{
            min-height: 595px;
            max-height: 595px;
            min-width: 590px;
            max-width: 590px;
        }

        #userRegisterViewTitle{
            min-height: 25px;
            max-height: 25px;
        }

        #userRegisterForm{
            min-height: 500px;
            max-height: 500px;
            min-width: 565px;
            max-width: 565px;
        }

        .userRegisterFormInputContainer{
            min-height: 26px;
            max-height: 26px;
            min-width: 300px;
            max-width: 300px;
            margin-top: 1%;
        }

        .userRegisterFormInputLabel{
            min-height: 20px;
            max-height: 20px;
            min-width: 90px;
            max-width: 90px;
        }

        .userRegisterFormInput{
            min-height: 20px;
            max-height: 20px;
            min-width: 200px;
            max-width: 200px;
        }

        #userRegisterFormButton{
            min-height: 28px;
            max-height: 28px;
            min-width: 80px;
            max-width: 80px;
            margin-top: 2%;
        }

        #userRegisterFormObservationInput{
            min-height: 170px;
            max-height: 170px;
            min-width: 470px;
            max-width: 470px;
        }
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { addCustomer } from '@/services/customers';

    const customerAttribList = ref(['Nombre','Apellido','Nacimiento','DNI','Plan']);
    const customerValues = ref(Array(customerAttribList.value.length).fill(''));
    // const observationVModel = ref('');
    

    const add = async()=>{
        await addCustomer(customerValues.value[0],
                        customerValues.value[1],
                        customerValues.value[2],
                        customerValues.value[3],
                        customerValues.value[4]
        );
    };

</script>