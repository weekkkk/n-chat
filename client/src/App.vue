<script lang="ts" setup></script>

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
