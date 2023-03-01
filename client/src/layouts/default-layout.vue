<script lang="ts" setup></script>

<template>
  <RouterView name="header" />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
body {
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
    main {
      flex-grow: 1;
      min-height: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>
