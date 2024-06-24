<template>
  <form @submit.prevent="send" class="pt-20 p-6">
    <div>
      <h1 class="text-2xl font-semibold mt-2">Подтверждение</h1>
      <span
        >Мы отправили код на номер:
        <span class="text-primary font-bold">{{ phone }}</span>
      </span>
      <input
        v-model="code"
        type="number"
        placeholder="Введите отправленный код"
        class="mt-4 input w-full"
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
        Подтвердить
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { AuthService } from "../services";
import { AuthAPI } from "../api";
import { useNotification } from "../composables/useNotification";

const router = useRouter();
const { showMessage } = useNotification();
const code = ref("");
const emits = defineEmits(["back"]);
const props = defineProps({
  phone: {
    type: String,
  },
});

const goBack = () => {
  emits("back");
};

const send = () => {
  AuthAPI.authClient({
    otp: code.value,
    phone: props.phone,
  })
    .then((result) => {
      AuthService.setTokens({
        accessToken: result.token,
        refreshToken: result.refresh,
      });
      showMessage("Успешно", "positive");
      router.push("/client-form");
    })
    .catch((error) => {
      if (error) {
        showMessage("Неправильный код", "warning");
      }
    });
};
</script>
