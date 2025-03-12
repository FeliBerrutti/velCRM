<!-- MEDIA QUERYS DEL PROYECTO: DE 820PX EN ADELANTE -->
<template>
    <div id="container">
        <verticalOptions></verticalOptions>
        <div id="rVC">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    #container{
        width: 100%;
        display: flex;
        flex-direction: row;
        background-color: rgba(240,240,240,0.9);
    }

    #rVC{
        width: 73%;
        border: 2px solid black;
        border-radius: 10px;
        width: 79%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        background-color: rgba(200,200,200,0.9);
    }

    @media(min-width: 820px) and (max-width: 1024px){
        #rVC{
            min-height: 600px;
            margin-top: 0.8%;
            margin-left: 1%;
        }
    }

    @media(min-width: 1025px){
        #container{

            min-height: 690px;
            max-height: 690px;
        }

        #rVC{
            min-height: 667px;
            max-height: 667px;
            margin-left: 1%;
        }
    }
</style>

<script setup>
    import VerticalOptions from './components/VerticalOptions.vue';
</script>