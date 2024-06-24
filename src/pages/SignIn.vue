<template>
  <form v-if="!isCodeSend" @submit.prevent="send" class="pt-20 p-6">
    <div>
      <h1 class="text-2xl font-semibold mt-2">
        Вход или
        <span class="text-primary"> регистрация </span>
      </h1>
      <input
        v-model="phone"
        placeholder="Введите ваш номер телефона"
        class="mt-4 input w-full"
        has-icon
        required
      />
    </div>
    <div class="flex flex-col gap-4 absolute bottom-10 p-4 left-0 right-0">
      <p class="text-center text-xs">
        Вводя номер, ты соглашаешься с
        <span class="text-primary">
          конфиденциальности и лицензионным соглашением политикой
        </span>
      </p>
      <button
        type="submit"
        class="bg-primary-plain p-4 w-full mt-2 font-medium text-white rounded-3xl text-center"
      >
        Получить код
      </button>
    </div>
  </form>
  <confirmation-password @back="isCodeSend = false" :phone="phone" v-else />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { AuthAPI } from "../api";
import ConfirmationPassword from "../components/ConfirmationPassword.vue";
import { useNotification } from "../composables/useNotification";

const { showMessage } = useNotification();
const router = useRouter();
const goBack = () => {
  router.push("/login");
};
const phone = ref();
const isCodeSend = ref(false);

const send = () => {
  AuthAPI.login({
    phone: phone.value,
  })
    .then((result) => {
      showMessage("Смс отправлен указанному номеру", "positive");
      isCodeSend.value = true;
    })
    .catch((error) => {
      if (error) {
        showMessage("Неправильный формат", "warning");
      }
    });
};
</script>
