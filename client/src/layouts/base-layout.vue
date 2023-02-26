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
  <div class="base-layout f w-100 h-100 cg-3">
    <aside class="dialogs w-100 bg-default br-3 p-3">
      <RouterView name="dialogs" />
    </aside>
    <aside class="w-100 f fd-col rg-3">
      <div class="bg-default br-3 p-3">
        <RouterView name="chat" />
      </div>
      <div class="h-100 bg-default br-3 p-3">
        <RouterView name="messages" />
      </div>
      <div class="bg-default br-3 p-3">
        <RouterView name="input" />
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.base-layout {
  aside {
    &.dialogs {
      max-width: 320px;
    }
  }
}
</style>
