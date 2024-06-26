<template>
  <form @submit.prevent="saveInfo" class="client-form relative pt-10">
    <div class="absolute top-10 p-6 left-0 flex flex-col gap-6">
      <h1 class="pt-10 text-center pb-10 text-3xl font-bold">РЕГИСТРАЦИЯ</h1>
      <div class="flex flex-col gap-2">
        <label for="name" class="font-semibold">Имя</label>
        <input
          type="text"
          v-model="formData.first_name"
          required
          placeholder="Введите имя"
          class="input input-bordered w-full"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="surname" class="font-semibold">Фамилия</label>
        <input
          v-model="formData.last_name"
          type="text"
          required
          placeholder="Введите имя"
          class="input input-bordered w-full"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="surname" class="font-semibold">Email</label>
        <input
          v-model="formData.email"
          type="email"
          required
          placeholder="Введите email"
          class="input input-bordered w-full"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="fatherName" class="font-semibold">Пол</label>
        <select v-model="formData.gender" required class="input w-full">
          <option value="male" selected>Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-col gap-2 w-2/5">
          <label for="fatherName" class="font-semibold">Вес(кг)</label>
          <input
            type="number"
            placeholder="Введите вес"
            v-model="formData.weight"
            class="input input-bordered w-full"
          />
        </div>
        <div class="flex flex-col gap-2 w-2/5">
          <label for="fatherName" class="font-semibold">Рост</label>
          <input
            type="number"
            placeholder="Введите рост"
            v-model="formData.height"
            class="input input-bordered w-full"
          />
        </div>
      </div>
      <button
        class="bg-primary p-4 w-full mt-8 text-white font-medium rounded text-center"
        type="submit"
      >
        Сохранить
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { UserAPI } from "../api";
import { useNotification } from "../composables/useNotification";

const { showMessage } = useNotification();
const router = useRouter();

const formData = ref({
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  height: "",
  weight: "",
});

const saveInfo = () => {
  UserAPI.editUserData({
    ...formData.value,
  })
    .then((result) => {
      showMessage("Данные успешно сохранены", "positive");
      router.push("/main-information");
    })
    .catch((error) => {
      if (error) {
        showMessage("Заполните все поля код", "warning");
      }
    });
};
</script>

<style></style>
