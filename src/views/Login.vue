<template>
    <div class="login">
        <button-component text="Авторизация" @click="authorization"/>
    </div>
</template>

<script setup lang="ts">

import ButtonComponent from '../components/ui/Button/ButtonComponent.vue';
import authorization from '../api/auth'


// async function authorization() {
//     try {
//         const response = await fetch( 'https://test.gnzs.ru/oauth/get-token.php' )
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }



</script>

<style scoped>

    .login {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>