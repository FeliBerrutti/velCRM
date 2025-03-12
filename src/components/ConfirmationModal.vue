<template>
    <div id="confirmationModalContainer" v-if="isVisible">
      <p>{{ refMSG }}</p>
      <div id="confirmationModalButtonsContainer">
        <button @click="handleButton(true)"><b>Aceptar</b></button>
        <button @click="handleButton(false)"><b>Cancelar</b></button>
      </div>
    </div>
  </template>

<style scoped>
    #confirmationModalContainer{
        border: 2px solid black;
        border-radius: 10px;
        background-color: rgb(200,200,200);
        width: 40%;
        padding: 1%;
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            border: 2px solid black;
            border-radius: 5px;
            width: 90%;
            height: auto;
            padding: 1%;
            background-color: rgb(150,150,150);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            word-wrap: break-word;
            overflow-wrap: break-word;
        }
        button:hover{
            cursor: pointer;
        }
    }

    #confirmationModalButtonsContainer{
        width: 80%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button{
            border: 2px solid black;
            border-radius: 5px;
            background-color: rgb(50,50,200);
            color: white;
            width: 25%;
            text-align: center;
        }
    }

    @media(max-width: 820px){
        #confirmationModalContainer{
            top: 10%;
            left: 30%;
            min-height: 170px;
            p{
                min-height: 100px;
                margin-bottom: 2%;
            }
        }

        #confirmationModalButtonsContainer{
            min-height: 25px;
            max-height: 30px;
            button{
                margin-left: 1.5%;
                margin-right: 1.5%;
            }
        }
    }

</style>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  refMSG: String,
  isVisible: Boolean,
  onConfirm: Function
});

const emit = defineEmits(['close', 'onConfirm', 'onCancel']);

const handleButton = (aux) => {
  emit('onConfirm', aux);
};
</script>