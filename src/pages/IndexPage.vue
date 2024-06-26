<template>
  <div class="p-6 pt-14">
    <div class="flex justify-between items-center">
      <div class="user flex items-center gap-4">
        <img class="h-14 w-14" src="../assets/icons/circle-user.svg" alt="" />
        <h1 class="text-2xl font-semibold">{{ first_name }} {{ last_name }}</h1>
      </div>
      <img class="h-7 w-7" src="../assets/icons/bell.svg" alt="" />
    </div>
    <div class="flex mt-16 justify-between gap-y-6">
      <div
        v-for="block in blocks"
        :key="block"
        class="bg-block p-2 rounded w-[47%] h-28 flex flex-col items-center justify-center"
        @click="pushRoute(block.routeName)"
      >
        <p class="w-11/12 text-bold text-center text-lg">
          {{ block.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { UserAPI } from "../api";

// import BaseAvatar from "../components/BaseAvatar.vue";
const router = useRouter();
const pushRoute = (name) => {
  router.push({ name: name });
};
const first_name = ref();
const last_name = ref();

const blocks = ref([
  {
    title: "Анкета",
    routeName: "survey",
  },
  {
    title: "Тренеры",
    routeName: "TrainersPage",
  },
  {
    title: "Отчеты",
    routeName: "trainers",
  },
  {
    title: "План питания",
    routeName: "DietPage",
  },
  {
    title: "Календарь",
    routeName: "trainers",
  },
]);

const getMe = () => {
  UserAPI.getMe()
    .then((result) => {
      first_name.value = result.first_name;
      last_name.value = result.last_name;
    })
    .catch((error) => {});
};
getMe();
</script>
