<script lang="ts" setup>
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import { ref } from 'vue';
/**
 * * Видимость боковой панели
 */
const panelVisible = ref(false);
</script>

<template>
  <aside
    class="f fd-col bg-default br-3 p-3"
    :class="{ open: panelVisible, close: !panelVisible }"
  >
    <div class="f ai-c jc-sb">
      <h3 class="lh-no">n<span class="c-brand">chat</span></h3>

      <NButton
        @click="panelVisible = false"
        :color="EColor.Second"
        :size="ESize.Default"
        :disabled="!panelVisible"
        square
        no-fill
      >
        <span class="material-symbols-rounded"> close </span>
      </NButton>
    </div>
  </aside>
  <section class="w-100 f fd-col rg-3">
    <header class="bg-default br-3 p-3 f ai-c jc-sb">
      <NButton
        @click="panelVisible = true"
        :color="EColor.Second"
        :size="ESize.Default"
        :disabled="panelVisible"
        square
        no-fill
      >
        <span class="material-symbols-rounded"> menu </span>
      </NButton>

    </header>

    <div class="h-100 bg-default br-3 p-3">
      <h1>body</h1>
    </div>

    <footer class="bg-default br-3 p-3">
      <h1>footer</h1>
    </footer>
  </section>
</template>

<style lang="scss">
$panel-w: 320px;
body {
  overflow-x: hidden;
}
main {
  column-gap: var(--n-indent-3);
  min-height: 100%;
  transition: 1s ease-in-out;
  justify-content: flex-start !important;

  > aside {
    min-width: $panel-w;
    max-width: $panel-w;
    overflow: hidden;
    transition: 1s ease-in-out;
    &.close {
      margin-left: calc($panel-w * -1 - var(--n-indent-3));
      opacity: 0;
      z-index: -1;
    }
  }
  > section {
    transition: 1s ease-in-out;
  }

  @media (max-width: 768px) {
    > aside {
      min-width: 100%;
      &.close {
        margin-left: calc(-100% - var(--n-indent-3));
        opacity: 0;
        + section {
          min-width: 100%;
        }
      }
      &.open {
        margin-left: 0;
        opacity: 1;
        + section {
          margin-right: calc(-100%);
          opacity: 0;
        }
      }
    }
  }
}
</style>
