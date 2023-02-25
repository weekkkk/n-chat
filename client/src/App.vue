<script lang="ts" setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
if (localStorage.getItem('token')) {
  userStore.checkAuth();
}
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
html {
  font-size: 16px;
  font-family: 'Montserrat';
}
body {
  background-color: var(--n-second-0);
}
a {
  text-decoration: underline;
  &:hover {
    filter: brightness(110%);
    text-decoration: none;
  }
  &:active {
    filter: brightness(90%);
  }
}
</style>
