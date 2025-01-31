<template>
    <div id="usersViewContainer">
        <div id="usersViewTitle">
            Usuarios
        </div>
        <div id="usersContainer"
            v-if="refUsers">
            <div class="userContent"
                v-for="(x, index) in refUsers"
                :key="index">
                <div class="userContentName">
                    {{ x.name }}
                </div>
                <div class="userContentCreated">
                    {{ x.created }}
                </div>
                <div class="userContentRol">
                    {{ x.rol }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #usersViewContainer{
        border: 2px solid red;
        width: 100%;
        padding: 1%;
    }

    #usersViewTitle{
        border: 2px solid black;
        width: 20%;
        padding: 1%;
    }

    #usersContainer{
        border: 2px solid purple;
        width: 97%;
        padding: 1%;
    }

    .userContent{
        border: 2px solid blue;
        width: 90%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;

    }

    .userContentName{
        border: 2px solid red;
        width: 20%;
        padding: 0.5%;
    }

    .userContentCreated{
        border: 2px solid blue;
        width: 17%;
        padding: 0.5%;
    }

    .userContentRol{
        border: 2px solid brown;
        width: 20%;
        padding: 0.5%;
    }

    @media(max-width: 820px){
        #usersViewContainer{
            min-height: 580px;
            max-height: 580px;
            min-width: 575px;
            max-width: 575px;
        }

        #usersViewTitle{
            min-height: 23px;
            max-height: 23px;
            min-width: 100px;
            max-width: 100px;
        }

        #usersContainer{
            min-height: 450px;
            max-height: 450px;
            min-width: 560px;
            max-width: 560px;
        }

        .userContent{
            min-height: 30px;
            max-height: 30px;
            min-width: 540px;
            max-width: 540px;
        }

        .userContentName{
            min-height: 21.5px;
            max-height: 21.5px;
            min-width: 100px;
            max-width: 100px;
            margin-right: 2%;
        }

        .userContentCreated{
            min-height: 21.5px;
            max-height: 21.5px;
            min-width: 100px;
            max-width: 100px;
            margin-right: 2%;
        }

        .userContentRol{
            min-height: 21.5px;
            max-height: 21.5px;
            min-width: 100px;
            max-width: 100px;
        }
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { getUsers } from '@/services/users';

    const refUsers = ref(null);
    const errMsg = ref('');

    const searchUsers = async()=>{
        try{
            refUsers.value = await getUsers();
            errMsg.value = '';
        }
        catch(err){
            errMsg.value = err;
            refUsers.value = null;
        }
    }

    searchUsers();

</script>