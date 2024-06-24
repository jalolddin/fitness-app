<template>
  <div>
    <h1 class="p-6 pt-16 text-center pb-10 text-3xl font-bold">Тренировки</h1>
    <div class="diet flex flex-col gap-8 justify-center items-center">
      <div>
        <button
          class="bg-primary p-4 mt-2 text-white font-medium rounded text-center"
          @click="create"
        >
          Создать новую тренировку
        </button>
      </div>
      <div
        v-for="block in trainings"
        :key="block"
        class="block rounded w-11/12 h-44 p-6 bg-block"
      >
        <div class="flex flex-col justify-between h-full">
          <div>
            <h1>{{ block.name }}</h1>
            <span class="text-md">Автор: {{ block.trainer }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="font-semibold text-lg">{{ block.date }}</span>
            <span class="text-md">Срок: {{ block.toDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { FitnessProgrammAPI } from "../api";

const router = useRouter();
const blocks = ref([
  {
    title: "Фитнес",
    date: "03.07.2024",
    trainer: "Trainer Trainerova",
    toDate: "2 месяца",
  },
  {
    title: "Акробатика",
    date: "03.07.2024",
    trainer: "Trainer Trainerova",
    toDate: "2 месяца",
  },
  {
    title: "Кросфит",
    date: "03.07.2024",
    trainer: "Trainer Trainerova",
    toDate: "2 месяца",
  },
]);
const create = () => {
  router.push({ name: "NewTraningPage" });
};
const trainings = ref();
const getAll = () => {
  try {
    const data = FitnessProgrammAPI.getAll();
    trainings.value = data;
  } catch (error) {}
};
getAll();
</script>

<style lang="scss">
.block h1 {
  margin: 0;
  font-size: 1.6rem;
  width: 85%;
  font-weight: 600;
  line-height: 2.4rem;
}
</style>
