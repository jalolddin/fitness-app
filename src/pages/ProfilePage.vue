<template>
  <div class="p-12 pt-12">
    <h1 class="p-6 pt-8 text-center pb-10 text-3xl font-bold">Профиль</h1>
    <div class="diet flex flex-col gap-8 justify-center items-center">
      <div class="flex w-full justify-between gap-12">
        <div
          class="flex flex-col items-center justify-center bg-block rounded p-6 w-5/12"
        >
          <p class="text-xl text-bold">86 кг</p>
          <span>вес</span>
        </div>
        <div
          class="flex flex-col items-center justify-center bg-block rounded p-6 w-5/12"
        >
          <p class="text-xl text-bold">185 см</p>
          <span>рост</span>
        </div>
      </div>
      <form @submit.prevent="saveInfo" class="w-full flex flex-col gap-6 mt-2">
        <div class="flex flex-col gap-2">
          <label class="label">Имя</label>
          <input
            required
            v-model="userData.first_name"
            class="input w-full"
            :readonly="!editMode"
            type="text"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="label">Фамилия</label>
          <input
            required
            v-model="userData.last_name"
            class="input w-full"
            type="text"
            :readonly="!editMode"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="gender" class="font-semibold">Пол</label>
          <select v-model="userData.gender" required class="input w-full">
            <option value="male" selected>Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>
        <div class="flex flex-col gap-2">
          <label class="label">Email</label>
          <input
            required
            :readonly="!editMode"
            v-model="userData.email"
            class="input w-full"
            type="text"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="label">Номер телефона</label>
          <input
            required
            :readonly="!editMode"
            v-model="userData.phone"
            class="input w-full"
            type="text"
          />
        </div>
        <div>
          <button
            v-if="!editMode"
            @click="editMode = !editMode"
            type="button"
            class="bg-primary-plain p-4 w-full mt-2 font-medium text-white rounded text-center"
          >
            Изменить
          </button>
          <button
            v-else
            type="submit"
            class="bg-primary p-4 w-full mt-2 font-medium text-white rounded text-center"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { UserAPI } from "../api";
import { useNotification } from "../composables/useNotification";

const { showMessage } = useNotification();
const editMode = ref(false);
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

const userData = ref();
const saveInfo = () => {
  try {
    const data = UserAPI.editUserData({ ...userData.value });
    showMessage("Данные успешно обновлены", "positive");
    editMode.value = false;
    getMe();
  } catch (error) {}
};
const getMe = () => {
  try {
    const data = UserAPI.getMe();
    userData.value = data;
  } catch (error) {}
};
getMe();
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
