<template>
    <div id="errorModalContainer" v-if="isErrorModalVisible">
      <p>{{ refErrorModalMSG }}</p>
      <button @click="handleConfirmButton()"><b>Confirmar</b></button>
    </div>
  </template>

  <style scoped>
    #errorModalContainer{
        border: 2px solid black;
        border-radius: 10px;
        background-color: rgb(220,100,100);
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
            background-color: rgb(240,240,240);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            word-wrap: break-word;
            overflow-wrap: break-word;
        }
        button{
            border: 2px solid black;
            border-radius: 5px;
            background-color: rgb(50,50,200);
            color: white;
            width: 25%;
            text-align: center;
        }
        button:hover{
          cursor: pointer;
        }
    }

    @media(min-width: 820px){
        #errorModalContainer{
            top: 10%;
            left: 30%;
            min-height: 170px;
            max-width: 400px;
            p{
                min-height: 100px;
                margin-bottom: 2%;
            }
            button{
                margin-left: 1.5%;
                margin-right: 1.5%;
                min-height: 25px;
                max-height: 25px;
            }
        }
    }

  @media(min-width: 1000px){
      #errorModalContainer{
        left: 35%;
      }
  }
</style>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  refErrorModalMSG: String,
  isErrorModalVisible: Boolean,
  confirmErrorMSG: Function
});

const emit = defineEmits(['close', 'onConfirm', 'onCancel']);

const handleConfirmButton = (aux) => {
  emit('confirmErrorMSG', aux);
};
</script>