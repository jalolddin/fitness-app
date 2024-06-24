<template>
  <div class="p-12 pt-12">
    <h1 class="p-6 pt-8 text-center pb-10 text-3xl font-bold">
      Создать новую тренировку
    </h1>
    <div class="diet flex flex-col gap-8 justify-center items-center">
      <form @submit.prevent="saveInfo" class="w-full flex flex-col gap-6 mt-2">
        <div class="flex flex-col gap-2">
          <label class="label">Название</label>
          <input
            required
            v-model="userData.name"
            class="input w-full"
            type="text"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="label">Начало периода</label>
          <input
            required
            v-model="userData.period_start"
            class="input w-full"
            type="date"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="label">Конец периода</label>
          <input
            required
            v-model="userData.period_end"
            class="input w-full"
            type="date"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="label">Количество повторение</label>
          <input
            required
            type="number"
            v-model="userData.span"
            class="input w-full"
          />
        </div>

        <div>
          <button
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
import { useNotification } from "../composables/useNotification";
import { FitnessProgrammAPI } from "../api";
import { useRouter } from "vue-router";

const { showMessage } = useNotification();

const userData = ref({
  name: "",
  period_start: "",
  period_end: "",
  span: "",
});
const router = useRouter();
const saveInfo = () => {
  try {
    const data = FitnessProgrammAPI.create({ ...userData.value });
    if (data) {
      router.push({ name: "TraningsPage" });
    }
    showMessage("Новая тренировка успешно создана", "positive");
  } catch (error) {}
};
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
