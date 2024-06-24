<template>
  <div class="trainers p-6">
    <h1 class="p-6 pt-10 text-center pb-10 text-3xl font-bold">
      Список тренеров
    </h1>
    <div class="flex flex-col gap-6 items-center w-full">
      <div
        class="bg-block rounded p-4 pt-6 pb-6 w-full"
        v-for="trainer in trainers"
        :key="trainer"
      >
        <div class="flex gap-3 items-center">
          <img class="h-1o w-10" src="../assets/icons/circle-user.svg" alt="" />
          <h1 class="text-lg text-bold">
            {{ trainer.first_name }} {{ trainer.last_name }}
          </h1>
        </div>
        <div class="flex flex-col gap-1 mt-12">
          <p>
            Номер телефона:
            <span class="label text-primary">{{ trainer.phone }}</span>
          </p>
          <span>{{ trainer.email }}</span>
          <p>
            Опыт:
            <span class="text-bold text-primary">
              {{ trainer.survey[0].experience }}
              года
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { TrainersAPI } from "../api";

const trainers = ref();
const getAll = () => {
  try {
    const data = TrainersAPI.getAll();
    if (data) {
      trainers.value = data;
    }
  } catch (error) {}
};
onMounted(() => {
  getAll();
});
</script>

<style></style>
