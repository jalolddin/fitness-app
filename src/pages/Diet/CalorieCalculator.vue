<template>
  <div class="p-4 calculator">
    <h1 class="p-6 pt-10 text-center pb-10 text-3xl font-bold">
      Калькулятор калорий
    </h1>
    <form class="mt-2 flex flex-col gap-5" @submit.prevent="save">
      <div class="flex flex-col gap-4">
        <label class="label">Ваш возраст</label>
        <input
          required
          v-model="formData.age"
          class="input"
          placeholder="Введите возраст..."
          type="number"
        />
      </div>
      <div class="flex flex-col gap-4">
        <label class="label">Ваш вес(кг)</label>
        <input
          v-model="formData.weight"
          required
          class="input"
          placeholder="Введите вес..."
          type="number"
        />
      </div>
      <div class="flex flex-col gap-4">
        <label class="label">Ваш рост(см)</label>
        <input
          v-model="formData.height"
          required
          class="input"
          placeholder="Введите рост..."
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
          class="bg-primary p-4 w-full mt-6 text-white font-medium rounded text-center"
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
    <div class="mt-6 p-6 bg-block rounded">
      <h1 class="text-bold text-2xl">Результаты расчета:</h1>
      <div ref="resultsSection" class="mt-6 flex justify-between gap-6">
        <div
          class="flex w-5/12 p-4 flex-col gap-4 justify-center items-center bg-black rounded"
          v-for="res in result"
          :key="res"
        >
          <p class="label">{{ res.title }}</p>
          <h1 class="text-2xl text-bold">{{ res.value }}</h1>
          <span class="text-sm text-center">{{ res.gramms }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const macros = ref({
  protein: 0,
  carbs: 0,
  fats: 0,
  calories: 0,
});

const resultsSection = ref();

const formData = ref({
  weight: "",
  height: "",
  age: "",
  gender: "",
});

// Use computed to dynamically compute the result based on macros
const result = computed(() => [
  {
    title: "Белки",
    gramms: "граммы (в день)",
    value: macros.value.protein,
  },
  {
    title: "Углеводы",
    gramms: "граммы (в день)",
    value: macros.value.carbs,
  },
  {
    title: "Жиры",
    gramms: "граммы (в день)",
    value: macros.value.fats,
  },
  {
    title: "Калории",
    gramms: "ккал (в день)",
    value: macros.value.calories,
  },
]);

const save = () => {
  formData.value.age = parseFloat(formData.value.age);
  formData.value.height = parseFloat(formData.value.height);
  formData.value.weight = parseFloat(formData.value.weight);

  if (formData.value.gender === "woman") {
    macros.value.calories = Math.round(
      655.09 +
        9.56 * formData.value.weight +
        1.84 * formData.value.height -
        4.67 * formData.value.age
    );
  } else {
    macros.value.calories = Math.round(
      66.47 +
        13.75 * formData.value.weight +
        5 * formData.value.height -
        6.75 * formData.value.age
    );
  }

  macros.value.protein = Math.round((macros.value.calories * 0.4) / 4);
  macros.value.carbs = Math.round((macros.value.calories * 0.4) / 4);
  macros.value.fats = Math.round((macros.value.calories * 0.2) / 9);

  resultsSection.value.scrollIntoView({ behavior: "smooth" });
};
const clear = () => {
  formData.value.age = null;
  formData.value.height = null;
  formData.value.weight = null;
  formData.value.gender = null;
};
</script>

<style></style>
