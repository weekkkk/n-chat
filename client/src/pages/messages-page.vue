<script lang="ts" setup>
import NcMessage from '@/components/project/nc-message.vue';
import { useMessageStore } from '@/stores';

const props = defineProps({
  /**
   * * Получатель
   */
  recipient: { type: String, default: '' },
});

/**
 * * Стор для работы с сообщениями
 */
const messageStore = useMessageStore();
messageStore.connectWs();
/**
 * * Получить сообщения
 */
messageStore.getIndividualDialogMessages(props.recipient);
</script>

<template>
  <ul class="messages rg-2 f fd-col h-100">
    <NcMessage
      v-for="message in messageStore.messages"
      :key="message.id"
      :message="message"
    />
  </ul>
</template>

<style lang="scss" scoped>
ul.messages {
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
