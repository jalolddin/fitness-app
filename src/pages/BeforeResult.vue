<template>
  <div class="client-form p-6 pt-24flex flex-col gap-6">
    <h1 class="text-3xl text-center font-semibold">ДО и ПОСЛЕ</h1>
    <p class="text-center">
      Поздравляем! <br />
      Это первый шаг к формированию отчета тренеру, <br />
      или самостоятельному отслеживанию прогресса
    </p>
    <div>
      <p>И последний шаг анкеты</p>
      <p>
        Загрузи 4 фотографии в 4 разворотах и введи дату Отнесись к этому
        ответственно - первые фото изменить нельзя
      </p>
    </div>
    <button
      class="bg-primary p-4 w-full mt-12 text-white font-medium rounded text-center"
      @click="saveInfo"
    >
      Загрузить фото
    </button>
    <button
      class="bg-silver p-4 w-full text-white font-medium rounded text-center"
      @click="saveInfo"
    >
      Позже
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const saveInfo = () => {
  router.push("/main");
};
</script>

<style></style>
