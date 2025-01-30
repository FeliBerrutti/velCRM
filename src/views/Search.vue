<template>
    <div id="searchViewContainer">
        <div id="searchViewTitle">
            <b>Buscar</b>
        </div>
        <SearchContainer></SearchContainer>
        <div id="searchViewResultsLabel">
            <b>Resultados</b>
        </div>
        <ResultsContainer></ResultsContainer>
    </div>
</template>

<style scoped>
    #searchViewContainer{
        border: 2px solid blue;
        width: 100%;
    }

    @media(max-width: 820px){
        #searchViewContainer{
            min-height: 600px;
            max-height: 600px;
            min-width: 590px;
            max-width: 590px;
        }
    }
</style>

<script setup>
import SearchContainer from '@/components/search/SearchContainer.vue';
import ResultsContainer from '@/components/search/ResultsContainer.vue';
</script>