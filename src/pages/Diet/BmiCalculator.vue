<template>
  <div class="calculator p-4">
    <h1 class="p-6 pt-10 text-center pb-10 text-3xl font-bold">
      Калькулятор индекса массы тела
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
    <div class="bg-block rounded mt-6 p-4">
      <h1 class="text-bold text-2xl">Результаты расчета:</h1>
      <div ref="resultsSection" class="mt-6 flex justify-start gap-6">
        <div
          class="flex w-5/12 p-4 flex-col gap-4 justify-center items-center bg-black rounded"
          v-for="res in result"
          :key="res"
        >
          <p class="label">{{ res.title }}</p>
          <h1 class="text-2xl text-bold">{{ res.value }}</h1>
          <span class="text-sm">{{ formData.result }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const resultsSection = ref();

const formData = ref({
  weight: "",
  height: "",
  age: "",
  gender: "",
  result: "",
  bmiValue: 0,
});

const result = computed(() => [
  {
    title: "ИМТ",
    value: formData.value.bmiValue,
  },
]);

const save = () => {
  const weight = parseFloat(formData.value.weight);
  const height = parseFloat(formData.value.height);

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    return; // Validation for non-numeric inputs or zero height
  }

  const bmi = weight / ((height / 100) * (height / 100));

  if (isNaN(bmi)) {
    return; // Additional validation for NaN result (though unlikely if previous checks passed)
  }

  if (bmi < 18.5) {
    formData.value.result = "Недостаток веса"; // Replace with your translation logic if using i18n
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    formData.value.result = "Здоровый"; // Replace with your translation logic if using i18n
  } else if (bmi >= 25 && bmi <= 29.9) {
    formData.value.result = "Избыточный вес"; // Replace with your translation logic if using i18n
  } else if (bmi >= 30 && bmi <= 34.9) {
    formData.value.result = "Ожирение"; // Replace with your translation logic if using i18n
  } else if (bmi >= 35) {
    formData.value.result = "Чрезвычайно толстый"; // Replace with your translation logic if using i18n
  }

  formData.value.bmiValue = Math.round(bmi);
  resultsSection.value.scrollIntoView({ behavior: "smooth" });
};

const clear = () => {
  formData.value.age = null;
  formData.value.height = null;
  formData.value.weight = null;
  formData.value.gender = null;
  formData.value.bmiValue = 0;
  formData.value.result = null;
};
</script>

<style></style>
