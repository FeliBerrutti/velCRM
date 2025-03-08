<template>
    <div id="usersViewContainer">
        <h4>Usuarios</h4>
        <div id="searchUsersContainer">
            <form id="searchUsersForm" action="">
                <div class="searchUserFormContent"
                        v-for="(x, index) in searchUserOptionsList"
                        :key="index">
                    <span>{{ x }}</span>
                    <input type="text"
                    v-model="searchUsersInputHandle[index]">
                </div>
                <button @click="handleButtonSearchClick"><b>Buscar</b></button>
            </form>
        </div>
        <div id="usersContainer"
        v-if="refUsers"
        @click="handleClickOutUserContents">
            <div class="userContent"
            @click="handleClickOutUserContents">
                <span><b>Nombre</b></span>
                <span><b>Creado</b></span>
                <span><b>Rol</b></span>
            </div>
            <div class="userContent"
            v-for="(x, index) in refUsers"
            :key="index" 
            @click="handleUserContentClick(index)"
            tabindex="0">
                <span>{{ x.name }}</span>
                <span>{{ x.created }}</span>
                <span>{{ x.rol }}</span>
            </div>
            <!-- REGISTRAR USUARIO -->
            <div id="addUserContainer"
            v-if="isAddUserVisible">
                <h4>Registrar usuario</h4>
                <form id="addUserForm">
                    <div class="addUserFormInputContainer"
                    v-for="(x, index) in addUserList"
                    :key="index">
                        <span>{{x}}</span>
                        <input 
                        v-model="addUserListValues[index]" type="text">
                    </div>
                </form>
                <button @click="handleNewUserButton()"><b>Agregar</b></button>
            </div>
            <!-- EDITAR USUARIO -->
            <div id="addUserContainer"
            v-if="isUpdateUserVisible">
                <h4>Editar usuario</h4>
                <form id="addUserForm">
                    <div class="addUserFormInputContainer"
                    v-for="(x, index) in updateUserList"
                    :key="index">
                        <span>{{ x }}</span>
                        <input type="text"
                        v-model="auxUserUpdate[index]">
                    </div>
                </form>
                <button @click="handleUpdateUserFormButtonClick"><b>Editar</b></button>
            </div>
            <!-- REPORTES -->
            <div id="userReportContainer"
            v-if="isReportUserVisible">
                <div id="userReportHeader">
                    <div class="userReportHeaderContent"
                    v-for="(x, index) in userReportHeaderList"
                    :key="index">
                        <span>{{ x }}</span>
                        <span class="userReportHeaderValue">UserName</span>
                    </div>
                </div>
                <div id="userReportBody">
                    <div class="userReportBodyContainer"
                    v-for="(x, index) in userReportsD"
                    :key="index">
                        <span>{{ x }}</span>
                        <div class="userReportBodyContent"
                        v-for="(x, index) in userReportBodyList"
                        :key="index">
                            <span>
                                {{ x }}
                            </span>
                            <span id="userReportBodyContentValue"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="userOptionsContainer">
            <button @click="handleUpdateUserClick()"><b>Editar</b></button>
            <button @click="delUser()"><b>Eliminar</b></button>
            <button @click="handleAddUserClick()"><b>Registrar</b></button>
            <button @click="handleOpenReportsClick"><b>Reportes</b></button>
        </div>
    </div>
</template>

<style scoped>
    #usersViewContainer{
        width: 100%;
        padding: 1%;
        h4{
            width: 20%;
            padding: 1%;
            margin: 0;
        }
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
        button{
            width: 15%;
            padding: 0.5%;
            border: 2px solid black;
            border-radius: 5px;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
        }
    }

    .searchUserFormContent{
        border: 2px solid black;
        border-radius: 5px;
        width: 35%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(240,240,240,0.7);
        span{
            width: 10%;
            padding: 0.1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        input{
            width: 17%;
            padding: 0.1%;
            border: 1.5px solid black;
            border-radius: 5px;
        }
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
        span{
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
    }

    .userContent:focus{
        background-color: rgba(100,100,100,0.7);
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
        button{
            width: 20%;
            padding: 0.5%;
            border: 2px solid black;
            border-radius: 5px;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
        }
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
        h4{
            margin: 0;
            text-overflow: ellipsis;
            text-wrap: nowrap;
        }
        button{
            border: 2px solid black;
            border-radius: 5px;
            width: 20%;
            padding: 1%;
            background-color: rgba(0, 0, 255, 0.477);
            color: white;
        }
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
        span{
            width: 22%;
            padding: 1%;
        }
        input{
            border: 1.5px solid black;
            border-radius: 5px;
            padding: 1%;
        }
    }

    #updateUserTitle{
        width: 25%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #userReportContainer{
        border: 2px solid black;
        border-radius: 5px;
        background-color: white;
        width: 65%;
        padding: 1%;
        position: fixed;
        background-color: rgb(200,200,200);
    }

    #userReportHeader{
        border: 2px solid black;
        border-radius: 5px;
        width: 95%;
        padding: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgb(130,130,130);
    }

    .userReportHeaderContent{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(90,90,90,0.8);
        span{
            border: 2px solid black;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(150,150,150);
        }
    }

    /* .userReportHeaderLabel{
        border: 2px solid black;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(150,150,150);
    } */

    .userReportHeaderValue{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(190,190,190);
    }

    #userReportBody{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        background-color: rgb(130,130,130);
    }

    .userReportBodyContainer{
        border: 2px solid black;
        border-radius: 5px;
        padding: 0.5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(90,90,90,0.8);
        span{
            border: 2px solid black;
            border-radius: 5px;
            padding: 1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(150,150,150);
        }
    }

    .userReportBodyContent{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(190,190,190);
        span{
            border: 2px solid black;
            border-radius: 5px;
            padding: 1%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(150,150,150);
        }
    }

    #userReportBodyContentValue{
        border: 2px solid black;
        border-radius: 5px;
        padding: 1%;
        background-color: white;
    }

    @media(max-width: 820px){
        #usersViewContainer{
            min-height: 580px;
            max-height: 580px;
            min-width: 575px;
            max-width: 575px;
            h4{
                min-height: 23px;
                max-height: 23px;
                min-width: 100px;
                max-width: 100px;
            }
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
            button{
                min-height: 25px;
                max-height: 25px;
                min-width: 80px;
                max-width: 80px;
            }
        }

        .searchUserFormContent{
            min-height: 35px;
            max-height: 35px;
            min-width: 200px;
            max-width: 200px;
            margin-right: 2%;
            span{
                min-height: 25px;
                max-height: 25px;
                min-width: 60px;
                max-width: 60px;
                margin-right: 2%;
            }
            input{
                min-height: 20px;
                max-height: 20px;
                min-width: 100px;
                max-width: 100px;
            }
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
            span{
                min-height: 21.5px;
                max-height: 21.5px;
                min-width: 100px;
                max-width: 100px;
                margin-right: 2%;
            }
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
            button{
                min-height: 25px;
                max-height: 25px;
                min-width: 100px;
                max-width: 100px;
                margin: 3%;
            }
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
            span{
                min-height: 18px;
                max-height: 18px;
                min-width: 60px;
                max-width: 60px;
                margin-right: 1%;
            }
            input{
                min-height: 20px;
                max-height: 20px;
                min-width: 150px;
                max-width: 150px;
            }
        }

        #userReportContainer{
            min-height: 330px;
            max-height: 330px;
        }

        #userReportHeader{
            min-height: 50px;
            max-height: 50px;
        }

        .userReportHeaderContent{
            min-height: 40px;
            max-height: 40px;
            min-width: 140px;
            max-width: 140px;
            margin: 1%;
            span{
                min-height: 15px;
                max-height: 15px;
                min-width: 120px;
                max-width: 120px;
            }
        }

        /* .userReportHeaderLabel{
            min-height: 15px;
            max-height: 15px;
            min-width: 120px;
            max-width: 120px;
        } */

        .userReportHeaderValue{
            min-height: 19px;
            max-height: 19px;
            min-width: 115px;
            max-width: 115px;
        }

        #userReportBody{
            min-height: 250px;
            max-height: 250px;
            min-width: 515px;
            max-width: 515px;
            margin-top: 1%;
        }

        .userReportBodyContainer{
            min-height: 110px;
            max-height: 110px;
            span{
                min-height: 13px;
                max-height: 13px;
                min-width: 100px;
                max-width: 100px;
            }
        }

        .userReportBodyContent{
            min-height: 20px;
            max-height: 20px;
            min-width: 420px;
            max-width: 420px;
            margin-top: 0.5%;
            span{
                min-height: 15px;
                max-height: 15px;
                min-width: 120px;
                max-width: 120px;
                margin-right: 1.5%;
            }
        }

        #userReportBodyContentValue{
            min-height: 15px;
            max-height: 15px;
            min-width: 250px;
            max-width: 250px;
        }
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { getAllUsers, addUser, deleteUser } from '@/services/UserService';
    import { User } from '@/models/User';

    const refUsers = ref(null);
    const refUsersClick = ref(null);

    const genRefUsers = ref([
        {id: 1,
         name: 'user01',
         password: '123',
         created: '1994-01-01',
         rol: 'Owner'
        }
    ]);

    var auxNewUser = new User(null, null, null);

    const errMsg = ref('');
    const isAddUserVisible = ref(false);
    const isUpdateUserVisible = ref(false);
    const isReportUserVisible = ref(false);
    const userContentNameValue = ref(null);
    const auxUserUpdate = ref([]);

    const userReportHeaderList = ref(['Usuario','Creado','Total Ventas']);

    const userReportBodyList = ref(['Ventas Mensuales','Planes vendidos'])

    const userReportsD = ref(['Este mes','Este año']);

    function handleOpenReportsClick(){
        if(!isReportUserVisible.value){
            isReportUserVisible.value = !isReportUserVisible.value;
        }else{
            isReportUserVisible.value = true;
        }
    }

    const handleUpdateUserClick = ()=>{
        if(!isUpdateUserVisible.value){
            isUpdateUserVisible.value = true;
        }else{
            isUpdateUserVisible.value = false;
        };
    };

    function handleClickOutUserContents(){
        userContentNameValue.value = null;
        console.log('Función ejecutada');
    };

    const handleAddUserClick = ()=>{
        if(!isAddUserVisible.value){
            isAddUserVisible.value = true;
        }else{
            isAddUserVisible.value = false;
        };
    };

    const searchUsers = async()=>{
        try{
            refUsers.value = await getAllUsers();
            console.log('Usuarios obtenidos exitosamente.');
        }catch(err){
            console.error(err);
        };
    };

    const handleUserContentClick = (index)=>{
        refUsersClick.value = refUsers.value[index];
        updateUserListValues.value = [refUsers.value[0].name,
                                        refUsers.value[0].password,
                                        refUsers.value[0].rol];
        console.log(updateUserListValues.value);
    };


    const searchUserOptionsList = ref(['Nombre','ID']);
    const searchUsersInputHandle = ref(Array(searchUserOptionsList.value.length).fill(''));
    const addUserList = ref(['Nombre','Password','Rol']);
    const addUserListValues = ref(Array(addUserList.value.length).fill(''));
    const updateUserList = ref(['Nombre','Password','Rol']);
    const updateUserListValues = ref(Array(updateUserList.value.length).fill(''));

    const handleNewUserButton = async () => {
    try {
        if (!addUserListValues.value[0] || !addUserListValues.value[1] || !addUserListValues.value[2]) {
            throw new Error('Todos los campos son obligatorios');
        }

        const auxAddUser = {
            name: addUserListValues.value[0],
            password: addUserListValues.value[1],
            rol: addUserListValues.value[2],
        };

        console.log(auxAddUser);
        await addUser(auxAddUser);
        console.log('Usuario creado con éxito.');
        handleAddUserClick();
        searchUsers();
        addUserListValues.value = [];
    } catch (err) {
        console.error('Error al crear usuario:', err);
    }
};

    const delUser = async()=>{
        try{
            await deleteUser(refUsersClick.value.id);
            searchUsers();
        }catch(err){
            console.error(err);
        };
    };

    searchUsers();

</script>