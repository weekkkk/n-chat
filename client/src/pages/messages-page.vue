<script lang="ts" async setup>
import { ref } from 'vue';
import NcMessage from '@/components/project/nc-message.vue';
import { IMessage } from '@/models/IMessage';
import { useMessageStore } from '@/stores/message';
/**
 * * Свойства
 */
const props = defineProps({
  /**
   * * ID диалога
   */
  dialogId: { type: String, default: '' },
});

const messageStore = useMessageStore();

if (props.dialogId) await messageStore.getMessages(props.dialogId);
</script>

<template>
  <ul class="messages f fd-col h-100" v-if="messageStore.messages">
    <NcMessage v-for="message in messageStore.messages" :key="message.id" />
  </ul>
</template>

<style lang="scss" scoped>
ul.messages {
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
