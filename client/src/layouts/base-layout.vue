<script lang="ts" setup>
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import { ref } from 'vue';
/**
 * * Видимость боковой панели
 */
const panelVisible = ref(true);
</script>

<template>
  <aside
    class="f fd-col bg-default br-3 p-3 rg-3"
    :class="{ open: panelVisible, close: !panelVisible }"
  >
    <div class="f ai-c jc-sb">
      <h3 class="lh-no">n<span class="c-brand">chat</span></h3>
      <NButton
        @click="panelVisible = false"
        :color="EColor.Second"
        :size="ESize.Small"
        :disabled="!panelVisible"
        square
        no-fill
      >
        <span class="material-symbols-rounded"> close </span>
      </NButton>
    </div>
    <RouterView name="aside" />
  </aside>
  <section class="w-100 f fd-col rg-3">
    <header class="bg-default br-3 p-3 f ai-c jc-sb">
      <RouterView name="header" />
      <NButton
        @click="panelVisible = true"
        :color="EColor.Second"
        :size="ESize.Small"
        :disabled="panelVisible"
        square
        no-fill
      >
        <span class="material-symbols-rounded"> menu </span>
      </NButton>
    </header>

    <div class="h-100 bg-default br-3 py-3">
      <RouterView name="body" />
    </div>

    <footer class="bg-default br-3 p-3">
      <RouterView name="footer" />
    </footer>
  </section>
</template>

<style lang="scss">
$panel-w: 320px;
body {
  overflow: hidden;
}
main {
  column-gap: var(--n-indent-3);
  min-height: 100%;
  transition: var(--n-ctrl-ts);
  justify-content: flex-start !important;
  height: calc(100vh - var(--n-indent-4) * 2);

  > aside {
    min-width: $panel-w;
    max-width: $panel-w;
    overflow: hidden;
    transition: var(--n-ctrl-ts);
    &.close {
      margin-left: calc($panel-w * -1 - var(--n-indent-3));
      opacity: 0;
      z-index: -1;
    }
  }
  > section {
    transition: var(--n-ctrl-ts);
    height: calc(100vh - var(--n-indent-4) * 2);
    > div {
      overflow: hidden;
    }
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
