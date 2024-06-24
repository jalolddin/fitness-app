<template>
  <form
    @submit.prevent="saveInfo"
    class="client-form p-6 pt-24 flex flex-col gap-6"
  >
    <h1 class="text-3xl font-semibold">
      СПИСОК
      <span class="text-primary"> ОГРАНИЧЕНИЙ </span>
    </h1>
    <p class="label">
      Список увидит только выбранный тренер. Указать эту информацию необходимо,
      чтобы выстроить безопасную программу тренировок
    </p>
    <div class="flex flex-col gap-2">
      <label for="name" class="label">Введите текущие противопоказания</label>
      <textarea
        required
        v-model="formData.survey[0].limitation.contraindications"
        class="textarea w-full mt-2 h-28"
        cols="30"
        rows="40"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="surname" class="label"
        >Введите перенесенные ранее проблемы с ОДА</label
      >
      <textarea
        required
        v-model="formData.survey[0].limitation.problems"
        class="textarea w-full mt-2 h-28"
        cols="30"
        rows="40"
      />
    </div>
    <div class="mt-2 flex flex-col gap-8">
      <button
        class="bg-primary p-4 w-full text-white font-medium rounded text-center"
        type="submit"
      >
        Cохранить
      </button>
      <button
        class="bg-primary-plain p-4 w-full text-white font-medium rounded text-center"
        type="button"
        @click="routePush"
      >
        Пропустить
      </button>
    </div>
  </form>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { UserAPI } from "../api";
import { useNotification } from "../composables/useNotification";

const { showMessage } = useNotification();

const router = useRouter();
const formData = ref({
  survey: [
    {
      limitation: {
        contraindications: "",
        problems: "",
      },
    },
  ],
});
const routePush = () => {
  router.push("/before-result");
};

const saveInfo = () => {
  UserAPI.createUserSurvey({
    ...formData.value,
    id: 1,
  })
    .then((result) => {
      showMessage("Данные успешно сохранены", "positive");
      router.push("/before-result");
    })
    .catch((error) => {
      if (error) {
        showMessage("Заполните все обязательные поля", "warning");
      }
    });
};
</script>

<style></style>
