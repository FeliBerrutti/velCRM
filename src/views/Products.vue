<template>
    <div id="productsViewContainer">
        <div id="productsViewTitle">
            Planes
        </div>
        <div id="productsContainer"
        v-if="refPlan">
            <div class="productContent"
            v-for="(x, index) in refPlan"
                    :key="index">
                <div class="productContentLabel">
                    {{ x.name }}
                </div>
                <div class="productContentValue">
                    {{ x.price }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #productsViewContainer{
        border: 2px solid red;
        width: 100%;
        padding: 0.1%;
    }

    #productsViewTitle{
        border: 2px solid black;
        width: 20%;
        padding: 1%;
    }

    #productsContainer{
        border: 2px solid black;
        width: 60%;
        padding: 1%;
    }

    .productContent{
        border: 2px solid black;
        width: 95%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
    }

    .productContentLabel{
        border: 2px solid black;
        width: 30%;
        padding: 1%;
    }

    .productContentValue{
        border: 2px solid black;
        width: 50%;
        padding: 1%;
    }

    @media(max-width: 820px){
        #productsViewContainer{
            min-height: 600px;
            max-height: 600px;
            min-width: 585px;
            max-width: 585px;
        }
    }

</style>

<script setup>
    import { ref } from 'vue';
    import { getProducts } from '@/services/products';

    const refPlan = ref(null);
    const errorMsg = ref('');

    const searchPlans = async()=>{
        try{
            refPlan.value = await getProducts();
            errorMsg.value = '';
        }catch(err){
            errorMsg.value = err;
            refPlan.value = null;
        }
    };

    searchPlans();
</script>