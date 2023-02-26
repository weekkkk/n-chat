<script lang="ts" setup>
import NButton from '@/components/button/n-button.vue';
import { EColor } from '@/components/enums';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>

<template>
  <p>
    На ваш email
    <span class="c-brand fw-medium"> {{ userStore.user?.email }} </span> было
    отправлено письмо с ссылкой для подтверждения аккаунта.
  </p>

  <div class="f jc-c">
    <NButton :color="EColor.Second" no-fill>Я ошибся при вводе email</NButton>
  </div>
</template>

<style lang="less" scoped></style>
