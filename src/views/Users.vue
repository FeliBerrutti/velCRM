<template>
    <div id="usersViewContainer">
        <div id="usersViewTitle">
            Usuarios
        </div>
        <div id="searchUsersContainer">
            <form id="searchUsersForm" action="">
                <div class="searchUserFormContent"
                        v-for="(x, index) in searchUserOptionsList"
                        :key="index">
                    <div class="searchUsersFormLabel">
                        {{ x }}
                    </div>
                    <input 
                    class="searchFormUsersInput" type="text"
                    v-model="searchUsersInputHandle[index]">
                </div>
                <button id="searchUsersFormButton"
                        @click="handleButtonSearchClick">Buscar</button>
            </form>
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
        <div id="userOptionsContainer">
            <button class="userOptionsButton">Editar</button>
            <button class="userOptionsButton">Eliminar</button>
            <button class="userOptionsButton">Registrar</button>
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

    #searchUsersContainer{
        border: 2px solid brown;
        padding: 1%;
    }

    #searchUsersForm{
        border: 2px solid green;
        width: 97.5%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .searchUserFormContent{
        border: 2px solid orange;
        width: 35%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .searchUsersFormLabel{
        border: 2px solid red;
        width: 10%;
        padding: 0.1%;
    }

    .searchFormUsersInput{
        width: 17%;
        padding: 0.1%;
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

    #userOptionsContainer{
        border: 2px solid black;
        width: 99%;
        padding: 0.1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .userOptionsButton{
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

        #searchUsersContainer{
            min-height: 45px;
            max-height: 45px;
            min-width: 560px;
            max-width: 560px;
            margin-top: 1%;
        }

        #searchUsersForm{
            min-height: 33px;
            max-height: 33px;
        }

        .searchUsersFormLabel{
            min-height: 20px;
            max-height: 20px;
            min-width: 55px;
            max-width: 55px;
        }

        .searchFormUsersInput{
            min-height: 17px;
            max-height: 17px;
            min-width: 100px;
            max-width: 100px;
        }

        #usersContainer{
            min-height: 400px;
            max-height: 400px;
            min-width: 560px;
            max-width: 560px;
            margin-top: 1%;
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

        #userOptionsContainer{
            min-height: 50px;
            max-height: 50px;
            min-width: 570px;
            max-width: 570px;
            margin-top: 1%;
        }

        .userOptionsButton{
            min-height: 25px;
            max-height: 25px;
            min-width: 100px;
            max-width: 100px;
            margin: 3%;
        }
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { getUsers, getUserId,
            getUserName, getUserIdName
     } from '@/services/users';

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
    };

    const searchUserById = async(auxId)=>{
        try{
            refUsers.value = await getUserId(auxId);
            errMsg.value = '';
        }
        catch(err){
            errMsg.value = err;
            refUsers.value = null;
        }
    };

    const searchUserByName = async(auxName)=>{
        try{
            refUsers.value = await getUserId(auxName);
            errMsg.value = '';
        }
        catch(err){
            errMsg.value = err;
            refUsers.value = null;
        }
    };

    const searchUserByIdName = async(auxId, auxName)=>{
        try{
            refUsers.value = await getUserId(auxId, auxName);
            errMsg.value = '';
        }
        catch(err){
            errMsg.value = err;
            refUsers.value = null;
        }
    };

    const handleButtonSearchClick = async()=>{
        if(searchUsersInputHandle.value[0] != '')
        {
            searchUserByIdName(searchUsersInputHandle.value[0]);
        }else if(searchUsersInputHandle.value[1] != ''){
            searchUserById(searchUsersInputHandle.value[1]);
        }else{
            searchUserByIdName(searchUsersInputHandle.value[1],
                                searchUsersInputHandle.value[0]
            );
        };
    };


    const searchUserOptionsList = ref(['Nombre','ID']);
    const searchUsersInputHandle = ref(Array(searchUserOptionsList.value.length).fill(''));

    searchUsers();

</script>