<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
/**
 * * Заголовок
 */
const title = computed(() => route.meta.title as string);
</script>

<template>
  <main class="form-layout f ai-c jc-c">
    <section class="container br-3 f bg-default fd-col p-3 g-4">
      <div class="form-row g-3">
        <h3 class="lh-no">n<span class="c-brand">chat</span></h3>
        <h2 v-if="title" class="lh-no ta-c">{{ title.toLowerCase() }}</h2>
      </div>
      <RouterView />
    </section>
  </main>
</template>

<style lang="scss">
main.form-layout {
  flex-grow: 1;
  > section.container {
    max-width: 532px;
    width: 100%;
    box-shadow: 0px 0px 16px rgba(72, 72, 72, 0.2);
    .form-row {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      @media (max-width: 532px) {
        grid-template-columns: 1fr;
      }
    }
    form {
      border-top: 1px solid var(--n-second-0);
      border-bottom: 1px solid var(--n-second-0);
      .form-row:not(:last-child) {
        border-bottom: 1px solid var(--n-second-0);
      }
    }
    .footer-row {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        width: 160px;
      }
      @media (max-width: 532px) {
        flex-direction: column-reverse;
        button {
          width: 100%;
        }
      }
    }
  }
}
</style>
