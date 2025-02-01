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
            <!-- <div id="userRegisterFormObservationsTitle">
                Observaciones
            </div>
             <textarea v-model="observationVMode" id="userRegisterFormObservationInput" rows="10"></textarea> -->
            <button @click="add" id="userRegisterFormButton">Registrar</button>
        </form>
    </div>
</template>

<style scoped>
    #userRegisterViewContainer{
        border: 2px solid black;
        width: 100%;
        padding: 0.1%;
    }

    #userRegisterViewTitle{
        border: 2px solid black;
        width: 20%;
        padding: 0.1%;
    }

    #userRegisterForm{
        border: 2px solid red;
        padding: 1%;
        width: 95%;
        display: flex;
        flex-direction: column;
    }

    .userRegisterFormInputContainer{
        border: 2px solid black;
        width: 70%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .userRegisterFormInputLabel{
        border: 2px solid black;
        width: 30%;
        padding: 0.1%;
    }

    .userRegisterFormInput{
        width: 50%;
        padding: 0.1%;
    }

    #userRegisterFormButton{
        width: 15%;
        padding: 0.5%;
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
            min-width: 400px;
            max-width: 400px;
            margin-top: 1%;
        }

        .userRegisterFormInputLabel{
            min-height: 20px;
            max-height: 20px;
            min-width: 120px;
            max-width: 120px;
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

    const customerAttribList = ref(['Nombre','Apellido','Nacimiento','DNI','Plan','Observación']);
    const customerValues = ref(Array(customerAttribList.value.length).fill(''));
    // const observationVModel = ref('');
    

    const add = async()=>{
        await addCustomer(customerValues.value[0],
                        customerValues.value[1],
                        customerValues.value[2],
                        customerValues.value[3],
                        customerValues.value[4],
                        customerValues.value[5]
                        // observationVModel.value
        );
    };

</script>