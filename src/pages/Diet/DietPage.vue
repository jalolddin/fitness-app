<template>
  <div>
    <h1 class="p-6 pt-16 text-center pb-10 text-3xl font-bold">Питание</h1>
    <div class="diet flex flex-col gap-8 justify-center items-center">
      <div
        v-for="block in blocks"
        :key="block"
        class="block rounded w-11/12 h-64 bg-cover bg-no-repeat"
        :style="{ backgroundImage: `url(${block.image})` }"
        @click="routePush(block.routeName)"
      >
        <div class="overlay">
          <h1>{{ block.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import calorieImage from "../../assets/images/calorie.jpeg"; // Adjust path as necessary
import waterBalance from "../../assets/images/water-balance.jpeg";
import bmi from "../../assets/images/bmi.jpeg";
import { useRouter } from "vue-router";

const router = useRouter();
const routePush = (name) => {
  router.push({ name: name });
};
const blocks = ref([
  {
    title: "Калькулятор калорий",
    image: calorieImage,
    routeName: "CalorieCalculator",
  },
  {
    title: "Калькулятор индекса массы тела (ИМТ)",
    image: bmi,
    routeName: "BmiCalculator",
  },
  {
    title: "Калькулятор водного баланса",
    image: waterBalance,
    routeName: "WaterCalculator",
  },
]);
</script>

<style lang="scss">
.block {
  position: relative;
  overflow: hidden;
  background-position: center;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}

.overlay {
  position: absolute;
  height: 100%;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  padding-bottom: 20px;
  color: white;
  display: flex;
  align-items: flex-end;
}

.overlay h1 {
  margin: 0;
  font-size: 1.6rem;
  width: 85%;
  font-weight: 600;
  line-height: 2.4rem;
}
</style>
