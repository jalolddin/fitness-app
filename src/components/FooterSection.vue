<template>
  <div
    class="bg-block footer w-full text-silver bg-footer flex items-center justify-between p-2 pl-6 pr-6 h-16 absolute bottom-0"
  >
    <router-link
      class="h-12 label mt-1 text-sm flex flex-col items-center justify-center"
      to="/main"
    >
      <img class="h-5 w-5" src="../assets/icons/house.svg" alt="" />
      Главная
    </router-link>
    <router-link
      class="label h-12 mt-1 text-sm flex flex-col items-center justify-center"
      to="/trainings"
    >
      <img class="h-5 w-5" src="../assets/icons/dumbbell.svg" alt="" />
      Тренировки
    </router-link>
    <router-link
      class="label h-12 mt-1 text-sm flex flex-col items-center justify-center"
      to="/diet"
    >
      <img class="h-5 w-5" src="../assets/icons/diet.svg" alt="" />
      Питание
    </router-link>
    <router-link
      class="label h-12 mt-1 text-sm flex flex-col items-center justify-center"
      to="/profile"
    >
      <img class="h-5 w-5" src="../assets/icons/circle-user.svg" alt="" />
      Профиль
    </router-link>
  </div>
</template>

<script></script>
