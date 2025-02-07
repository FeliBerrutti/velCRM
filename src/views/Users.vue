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
                        @click="handleButtonSearchClick"><b>Buscar</b></button>
            </form>
        </div>
        <div id="usersContainer"
            v-if="refUsers">
            <div class="userContent">
                <div class="userContentName"><b>Nombre</b></div>
                <div class="userContentCreated"><b>Creado</b></div>
                <div class="userContentRol"><b>Rol</b></div>
            </div>
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
            <div id="addUserContainer"
            v-if="isAddUserVisible">
                <div id="addUserTitle">
                    Registrar usuario
                </div>
                <form id="addUserForm">
                    <div class="addUserFormInputContainer"
                    v-for="(x, index) in addUserList"
                    :key="index">
                        <div class="addUserFormLabel">
                            {{x}}
                        </div>
                        <input 
                        v-model="addUserListValues[index]"
                        class="addUserFormInput" type="text">
                    </div>
                </form>
                <button id="addUserFormButton"
                            @click="handleNewUserButton"><b>Agregar</b></button>
            </div>
        </div>
        <div id="userOptionsContainer">
            <button class="userOptionsButton"><b>Editar</b></button>
            <button class="userOptionsButton"><b>Eliminar</b></button>
            <button class="userOptionsButton"
            @click="handleAddUserClick()"><b>Registrar</b></button>
        </div>
    </div>
</template>

<style scoped>
    #usersViewContainer{
        width: 100%;
        padding: 1%;
    }

    #usersViewTitle{
        width: 20%;
        padding: 1%;
    }

    #searchUsersContainer{
        border: 2px solid black;
        border-radius: 10px;
        padding: 1%;
        background-color: rgba(150,150,150,0.9);
    }

    #searchUsersForm{
        width: 97.5%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .searchUserFormContent{
        border: 2px solid black;
        border-radius: 5px;
        width: 35%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(240,240,240,0.7);
    }

    .searchUsersFormLabel{
        width: 10%;
        padding: 0.1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .searchFormUsersInput{
        width: 17%;
        padding: 0.1%;
        border: 1.5px solid black;
        border-radius: 5px;
    }

    #searchUsersFormButton{
        width: 15%;
        padding: 0.5%;
        border: 2px solid black;
        border-radius: 5px;
        background-color: rgba(0, 0, 255, 0.477);
        color: white;
    }

    #usersContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 97%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(150,150,150,0.9);
        overflow: scroll;
    }

    .userContent{
        border: 2px solid black;
        border-radius: 10px;
        width: 70%;
        padding: 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgba(240,240,240,0.7);
    }

    .userContentName{
        border: 2px solid black;
        border-radius: 5px;
        width: 20%;
        padding: 0.5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(240,240,240,0.9);
    }

    .userContentCreated{
        border: 2px solid black;
        border-radius: 5px;
        width: 17%;
        padding: 0.5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(240,240,240,0.9);
    }

    .userContentRol{
        border: 2px solid black;
        border-radius: 5px;
        width: 20%;
        padding: 0.5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(240,240,240,0.9);
    }

    #userOptionsContainer{
        border: 2px solid black;
        border-radius: 10px;
        width: 99%;
        padding: 0.1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgba(150,150,150,0.9);
    }

    .userOptionsButton{
        width: 20%;
        padding: 0.5%;
        border: 2px solid black;
        border-radius: 5px;
        background-color: rgba(0, 0, 255, 0.477);
        color: white;
    }

    #addUserContainer{
        border: 2px solid black;
        border-radius: 10px;
        padding: 1%;
        width: 60%;
        background-color: rgb(150,150,150);
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #addUserForm{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .addUserFormInputContainer{
        border: 2px solid black;
        border-radius: 5px;
        width: 75%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        background-color: rgba(240,240,240,0.7);
    }

    .addUserFormLabel{
        width: 22%;
        padding: 1%;
    }

    .addUserFormInput{
        border: 1.5px solid black;
        border-radius: 5px;
        padding: 1%;
    }

    #addUserFormButton{
        border: 2px solid black;
        border-radius: 5px;
        width: 20%;
        padding: 1%;
        background-color: rgba(0, 0, 255, 0.477);
        color: white;
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

        .searchUserFormContent{
            min-height: 35px;
            max-height: 35px;
            min-width: 200px;
            max-width: 200px;
            margin-right: 2%;
        }

        .searchUsersFormLabel{
            min-height: 25px;
            max-height: 25px;
            min-width: 60px;
            max-width: 60px;
            margin-right: 2%;
        }

        .searchFormUsersInput{
            min-height: 20px;
            max-height: 20px;
            min-width: 100px;
            max-width: 100px;
        }

        #searchUsersFormButton{
            min-height: 25px;
            max-height: 25px;
            min-width: 80px;
            max-width: 80px;
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
            min-width: 440px;
            max-width: 440px;
            margin-top: 1%;
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

        #addUserContainer{
            min-height: 250px;
            max-height: 250px;
            min-width: 420px;
            max-width: 420px;
        }

        #addUserForm{
            min-height: 180px;
            max-height: 180px;
            min-width: 400px;
            max-width: 400px;
        }

        .addUserFormInputContainer{
            min-height: 25px;
            max-height: 25px;
            min-width: 270px;
            max-width: 270px;
            margin-bottom: 2%;
        }

        .addUserFormLabel{
            min-height: 18px;
            max-height: 18px;
            min-width: 60px;
            max-width: 60px;
            margin-right: 1%;
        }

        .addUserFormInput{
            min-height: 20px;
            max-height: 20px;
            min-width: 150px;
            max-width: 150px;
        }
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { getUsers, getUserId,
            addUser
     } from '@/services/users';

    const refUsers = ref(null);
    const errMsg = ref('');
    const isAddUserVisible = ref(false);

    function handleAddUserClick(){
        if(!isAddUserVisible.value){
            isAddUserVisible.value = true;
        }else{
            isAddUserVisible.value = false;
        }
    };

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

    const handleNewUserButton = async()=>{
        try{
            await addUser(addUserListValues.value[0],
                      addUserListValues.value[1],
                      addUserListValues.value[2]
        );
        console.log('Usuario registrado.');
        handleAddUserClick();
        searchUsers();
        }catch(err){
            errMsg.value = err;
            console.log(err);
        }
    };


    const searchUserOptionsList = ref(['Nombre','ID']);
    const searchUsersInputHandle = ref(Array(searchUserOptionsList.value.length).fill(''));
    const addUserList = ref(['Nombre','Password','Rol']);
    const addUserListValues = ref(Array(addUserList.value.length).fill(''));
    searchUsers();

</script>