<template>
  <div class="calculator p-4">
    <h1 class="p-6 pt-10 text-center pb-10 text-3xl font-bold">
      Калькулятор водного баланса
    </h1>
    <form class="mt-2 flex flex-col gap-5" @submit.prevent="save">
      <div class="flex flex-col gap-4">
        <label class="label">Ваш вес(кг)</label>
        <input
          v-model="formData.weight"
          required
          class="input"
          placeholder="Введите возраст..."
          type="number"
        />
      </div>
      <div class="flex flex-col gap-4">
        <label class="label"
          >Время активного занятия с высокой физ. нагрузкой(часов)</label
        >
        <input
          v-model="formData.activeTime"
          required
          class="input"
          placeholder="Введите активного занятия..."
          type="number"
        />
      </div>
      <div class="flex flex-col gap-4">
        <label class="label">Ваш пол</label>
        <select v-model="formData.gender" required class="input w-full">
          <option value="male" selected>Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>
      <div>
        <button
          class="bg-primary p-4 w-full mt-8 text-white font-medium rounded text-center"
          type="submit"
        >
          Расчитать
        </button>
        <button
          class="bg-primary-plain p-4 w-full mt-8 text-white font-medium rounded text-center"
          @click="clear"
        >
          Очистить
        </button>
      </div>
    </form>
    <div
      ref="resultsSection"
      class="bg-block rounded p-4 mt-6 flex flex-col gap-6"
    >
      <h1 class="text-bold text-2xl">Результаты расчета:</h1>
      <div
        class="flex w-5/12 p-4 flex-col gap-4 justify-start items-center bg-black rounded"
        v-for="res in result"
        :key="res"
      >
        <p class="label text-center">{{ res.title }}</p>
        <h1 class="text-2xl text-bold">{{ res.value }}</h1>
        <span class="text-sm">{{ res.gramms }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const formData = ref({
  weight: "",
  activeTime: "",
  gender: "",
  waterDrink: 0,
});

const result = computed(() => [
  {
    title: "Количество воды за сутки",
    gramms: "в литрах",
    value: formData.value.waterDrink || 0,
  },
]);

const resultsSection = ref();
const clear = () => {
  formData.value.weight = null;
  formData.value.gender = null;
  formData.value.activity = null;
};
const save = () => {
  if (formData.value.gender === "man") {
    formData.value.waterDrink = Math.round(
      formData.value.weight * 0.04 + formData.value.activeTime * 0.6
    );
  } else {
    formData.value.waterDrink = Math.round(
      formData.value.weight * 0.03 + formData.value.activeTime * 0.4
    );
  }

  resultsSection.value.scrollIntoView({ behavior: "smooth" });
};
</script>

<style></style>
