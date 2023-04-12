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
  <div class="base-layout f w-100 cg-3">
    <aside class="dialogs w-100 bg-default f fd-col br-2">
      <RouterView name="dialogs" />
    </aside>
    <aside class="w-100 bg-default f fd-col br-2">
      <div class="recipient py-2 px-3">
        <RouterView name="recipient" />
      </div>
      <div class="messages f fd-col">
        <RouterView name="messages" />
      </div>
      <div class="input py-2 px-3">
        <RouterView name="input" />
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.base-layout {
  overflow: hidden;
  flex-grow: 1;
  aside {
    .recipient {
      border-bottom: 1px solid var(--n-second-0);
    }
    &.dialogs {
      max-width: 320px;
      min-width: 320px;
      overflow: hidden;
    }
    .messages {
      flex-grow: 1;
      min-height: 0;
    }
    .input {
      border-top: 1px solid var(--n-second-0);
    }
  }
}
</style>
