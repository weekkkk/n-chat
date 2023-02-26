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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  #app {
    max-width: 1024px;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    row-gap: var(--n-indent-3);
    main {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
