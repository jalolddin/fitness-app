<template>
  <div class="client-form p-6 pt-20 flex flex-col gap-4">
    <h1 class="text-3xl font-semibold">
      ВЫБЕРИТЕ
      <span class="text-primary"> ЦЕЛЬ </span>
    </h1>
    <div class="flex flex-col gap-6 mt-4">
      <div v-for="target in targets" :key="target" class="row">
        <label class="label flex flex-row items-center gap-4">
          <input
            type="checkbox"
            :value="target.title"
            v-model="formData.survey[0].targets"
            class="checkbox checkbox-primary h-7 w-7"
          />
          <span class="label-text text-base">{{ target.title }}</span>
        </label>
      </div>
    </div>
    <div class="mt-4 flex flex-col gap-3">
      <!-- <div>
        <p class="label">Нет твоей цели в списке? Укажи здесь.</p>
        <p class="label">Тренер обязательно всё учтет!</p>
      </div> -->
      <!-- <textarea class="textarea w-full mt-2 h-20" cols="30" rows="40" /> -->
    </div>
    <button
      class="bg-primary p-4 w-full mt-2 text-white font-medium rounded text-center"
      @click="saveInfo"
    >
      Цели поставлены!
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { UserAPI } from "../api";
import { useNotification } from "../composables/useNotification";

const { showMessage } = useNotification();

const router = useRouter();

const formData = ref({
  survey: [
    {
      targets: [],
    },
  ],
});
const targets = ref([
  {
    title: "Набор мышечной массы",
  },
  {
    title: "Рекомпозиция",
  },
  {
    title: "Поддержание формы",
  },
  {
    title: "Восстановление после родов",
  },
  {
    title: "Реабилитация после травмы",
  },
  {
    title: "Улучшение растяжки и гибкости",
  },
  {
    title: "Развитие выносливости",
  },
  {
    title: "Подготовка к соревнованиям",
  },
]);
const saveInfo = () => {
  UserAPI.createUserSurvey({
    ...formData.value,
    id: 1,
  })
    .then((result) => {
      showMessage("Данные успешно сохранены", "positive");
      router.push("/limitation");
    })
    .catch((error) => {
      if (error) {
        showMessage("Заполните все обязательные поля", "warning");
      }
    });
};
</script>

<style></style>
