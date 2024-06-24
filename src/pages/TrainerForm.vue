<template>
  <form
    @submit.prevent="saveInfo"
    class="client-form p-6 pt-16 flex flex-col gap-6"
  >
    <h1 class="p-6 pt-10 text-center pb-10 text-3xl font-bold">РЕГИСТРАЦИЯ</h1>
    <div class="flex flex-col gap-2">
      <label for="name" class="font-semibold">Имя</label>
      <input
        type="text"
        required
        placeholder="Введите имя"
        class="input input-bordered w-full"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="surname" class="font-semibold">Фамилия</label>
      <input
        type="text"
        required
        placeholder="Введите имя"
        class="input input-bordered w-full"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="surname" class="font-semibold">Email</label>
      <input
        type="text"
        required
        placeholder="Введите email"
        class="input input-bordered w-full"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="fatherName" class="font-semibold">Пол</label>
      <select required class="input input w-full">
        <option value="male" selected>Мужской</option>
        <option value="female">Женский</option>
      </select>
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
import { useRouter } from "vue-router";

const router = useRouter();

const saveInfo = () => {
  router.push("/trainer-full-form");
};
</script>

<style></style>
