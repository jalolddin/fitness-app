<template>
  <form
    @submit.prevent="saveInfo"
    class="client-form p-6 pt-12 flex flex-col gap-6"
  >
    <h1 class="p-6 pt-10 text-center pb-10 text-3xl font-bold">
      АНКЕТА <span class="text-primary">ТРЕНЕРА</span>
    </h1>
    <div class="flex flex-col gap-3">
      <label for="name" class="label font-semibold"
        >Тренерский стаж(лет):</label
      >
      <input type="number" class="input input-bordered w-ful h-10 w-full" />
    </div>
    <div class="flex flex-col gap-3">
      <label for="name" class="label font-semibold">Специализация:</label>
      <textarea
        class="textarea input-bordered w-ful h-28"
        cols="30"
        rows="40"
      />
    </div>
    <div class="flex flex-col gap-3">
      <label for="name" class="label font-semibold"
        >Спортивные достижения:</label
      >
      <textarea
        class="textarea input-bordered w-ful h-28"
        cols="30"
        rows="40"
      />
    </div>
    <div class="flex flex-col gap-3">
      <label for="name" class="label font-semibold">Целевая аудитория:</label>
      <div class="flex gap-6">
        <div v-for="auditory in auditories" :key="auditory" class="row">
          <label class="cursor-pointer label flex flex-row items-center gap-3">
            <input
              type="checkbox"
              v-model="btnLoading"
              class="checkbox checkbox-primary h-7 w-7"
            />
            <span class="label-text text-base">{{ auditory.title }}</span>
          </label>
        </div>
      </div>
    </div>
    <button
      class="bg-primary p-4 w-full mt-8 text-white font-medium rounded text-center"
      type="submit"
    >
      Сохранить
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const auditories = ref([
  {
    title: "Мужчины",
  },
  {
    title: "Дети, подростки",
  },
  {
    title: "Женщины",
  },
  {
    title: "Пожилые",
  },
]);

const saveInfo = () => {
  router.push("/main-information");
};
</script>

<style></style>
