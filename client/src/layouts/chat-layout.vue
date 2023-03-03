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
    <aside class="dialogs w-100 bg-default br-3 p-3 f fd-col rg-3">
      <RouterView name="dialogs" />
    </aside>
    <aside class="w-100 f fd-col rg-3">
      <div class="bg-default br-3 p-3">
        <RouterView name="chat" />
      </div>
      <div class="messages f fd-col bg-default br-3 p-3">
        <Suspense>
          <RouterView name="messages" />
        </Suspense>
      </div>
      <div class="bg-default br-3 p-3">
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
    &.dialogs {
      max-width: 320px;
      overflow: hidden;
    }
    .messages {
      flex-grow: 1;
      min-height: 0;
    }
  }
}
</style>
