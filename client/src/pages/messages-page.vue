<script lang="ts" setup>
import NcMessage from '@/components/project/nc-message.vue';

/**
 * * Свойства
 */
const props = defineProps({
  /**
   * * ID диалога
   */
  dialogId: { type: Number, default: undefined },
});
</script>

<template>
  <ul v-if="dialogId" class="messages f fd-col h-100">
    <NcMessage />
  </ul>
  <div class="messages f fd-col jc-c ai-c ta-c rg-3  c-second-100" v-else>
    <span class="material-symbols-rounded fs-h1"> forum </span>
    <p class="fw-medium">Выберите диалог, чтобы начать общение</p>
  </div>
</template>

<style lang="scss" scoped>
ul.messages {
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
