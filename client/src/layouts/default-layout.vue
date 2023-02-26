<script lang="ts" setup></script>

<template>
  <main class="f jc-c">
    <RouterView />
  </main>
</template>

<style lang="scss">
body {
  padding: var(--n-indent-3);
  min-height: 100vh;
  display: flex;
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    main {
      max-width: 1024px;
      width: 100%;
    }
  }
}
</style>
