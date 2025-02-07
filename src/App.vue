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
        border: 2px solid black;
        background-color: chocolate;
    }

    #rVC{
        width: 73%;
        border: 2px solid brown;
        padding: 1%;
        display: flex;
        flex-direction: row;
    }

    @media(max-width: 820px){
        #rVC{
            min-height: 600px;
            max-height: 600px;
            min-width: 590px;
            max-width: 590px;
            margin-top: 0.8%;
            margin-left: 1%;
        }
    }
</style>

<script setup>
    import VerticalOptions from './components/VerticalOptions.vue';
</script>