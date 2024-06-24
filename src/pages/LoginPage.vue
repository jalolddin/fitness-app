<template>
  <div class="login">
    <div class="flex flex-col items-center w-80">
      <div class="w-full flex flex-col gap-2 justify-center items-center">
        <img class="h-60" src="../assets/images/logo.png" alt="" />
        <h1 class="text-3xl font-medium text-white">Выбор роли</h1>
      </div>
      <div class="mt-12 flex flex-col gap-4 w-full">
        <div
          @click="pushRoute('/sign-in')"
          class="bg-primary p-4 w-full text-white font-medium rounded text-center"
        >
          Я клиент DDX
        </div>
        <div
          @click="pushRoute('/sign-in')"
          class="bg-primary-plain p-4 w-full font-medium text-white rounded text-center"
        >
          Я тренер
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const pushRoute = (route) => {
  router.push(route);
};
</script>

<style lang="scss">
.login {
  background: #1a202a;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
