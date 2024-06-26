<template>
  <form @submit.prevent="saveInfo" class="client-form relative p-6 pt-16">
    <div class="absolute top-10 p-6 left-0 flex flex-col gap-6">
      <h1 class="pt-10 text-center pb-10 text-3xl font-bold">
        ОCНОВНАЯ
        <span class="text-primary"> ИНФОРМАЦИЯ </span>
      </h1>
      <div class="flex flex-col gap-3">
        <label class="label" for="fatherName">Опыт в фитнесе</label>
        <select
          v-model="formData.survey[0].mainInformation.experienceFitness"
          required
          class="input w-full"
        >
          <option
            v-for="experience in experienceTypes"
            :key="experience"
            :value="experience.title"
            class="w-full"
          >
            {{ experience.title }}
          </option>
        </select>
      </div>
      <div class="flex flex-col gap-3">
        <label class="label" for="surname">Опыт занятий с тренером</label>
        <select
          required
          v-model="formData.survey[0].mainInformation.experienceWithTrainer"
          class="input w-full"
        >
          <option
            v-for="experience in experienceTypes"
            :key="experience"
            :value="experience.title"
            class="w-full"
          >
            {{ experience.title }}
          </option>
        </select>
      </div>
      <div class="flex flex-col gap-3">
        <label class="label" for="fatherName"
          >Желаемое кол-во тренировок в неделю</label
        >
        <input
          type="number"
          v-model="formData.survey[0].mainInformation.spanTrainings"
          required
          placeholder="Введите число или интервал"
          class="input input-bordered w-full"
        />
      </div>
      <button
        type="submit"
        class="bg-primary p-4 w-full mt-12 text-white font-medium rounded text-center"
      >
        Поставить цель!
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { UserAPI } from "../api";
import { useRouter } from "vue-router";
import { useNotification } from "../composables/useNotification";

const { showMessage } = useNotification();
const experienceTypes = ref([
  {
    title: "Менее полугода (Новичок)",
  },
  {
    title: "От года до двух лет (Начинающий)",
  },
  {
    title: "2-3 года (Продолжающий)",
  },
  {
    title: "Более 5 лет (Профи)",
  },
]);

const router = useRouter();

const formData = ref({
  survey: [
    {
      mainInformation: {
        experienceFitness: "",
        experienceWithTrainer: "",
        spanTrainings: "",
      },
    },
  ],
});

const saveInfo = () => {
  UserAPI.createUserSurvey({
    ...formData.value,
    id: 1,
  })
    .then((result) => {
      showMessage("Данные успешно сохранены", "positive");
      router.push("/put-targets");
    })
    .catch((error) => {
      if (error) {
        showMessage("Заполните все обязательные поля", "warning");
      }
    });
};
</script>

<style></style>
