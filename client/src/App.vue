<script lang="ts" setup></script>

<template>
  <RouterView />
</template>

<style lang="scss">
html {
  font-size: 16px;
  font-family: 'Montserrat';
  body {
    background-color: var(--n-second-0);
    padding: var(--n-indent-3);
    height: 100vh;
    display: flex;
    justify-content: center;
    #app {
      max-width: 1024px;
      width: 100%;
      display: inline-flex;
      flex-direction: column;
      row-gap: var(--n-indent-3);
    }
  }
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
