<template>
    <div id="searchContainer">
        <div id="searchContainerLabel">
            DNI:
        </div>
        <input id="searchContainerInput" type="text"/>
        <button id="searchContainerButton">BUSCAR</button>
    </div>
</template>

<style scoped>
    #searchContainer{
        border: 2px solid black;
        width: 95%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #searchContainerLabel{
        border: 2px solid black;
        width: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #searchContainerInput{
        width: 20%;
    }

    @media(max-width: 820px){
        #searchContainer{
            min-height: 50px;
            max-height: 50px;
        }

        #searchContainerLabel{
            min-height: 25px;
            max-height: 25px;
            min-width: 50px;
            max-width: 50px;
            margin-right: 1%;
        }

        #searchContainerInput{
            min-height: 25px;
            max-height: 25px;
            min-width: 100px;
            max-width: 100px;
            margin-right: 1%;
        }
    }
</style>

<script setup>

</script>