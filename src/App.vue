<template>
  <router-view class="main" />
  <Footer
    v-if="
      isFooter.login &&
      isFooter.signIn &&
      isFooter.main &&
      isFooter.limitation &&
      isFooter.targets &&
      isFooter.client &&
      isFooter.before &&
      isFooter.trainerForm &&
      isFooter.trainerFullForm
    "
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Footer from "./components/FooterSection.vue";

const route = useRoute();

const isFooter = computed(() => ({
  login: route?.path !== "/login",
  signIn: route?.path !== "/sign-in",
  main: route?.path !== "/main-information",
  targets: route?.path !== "/put-targets",
  limitation: route?.path !== "/limitation",
  client: route?.path !== "/client-form",
  before: route?.path !== "/before-result",
  trainerForm: route?.path !== "/trainer-form",
  trainerFullForm: route?.path !== "/trainer-full-form",
}));
</script>
