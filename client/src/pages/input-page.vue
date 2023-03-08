<script lang="ts" setup>
import { ref } from 'vue';
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import { EType } from '@/components/input/enums';
import NInput from '@/components/input/n-input.vue';
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
 * * Текст сообщения
 */
const text = ref('');
/**
 * * Отправить сообщение
 */
function send() {
  messageStore.sendMessageToUser(props.recipient, text.value);
  text.value = '';
}
</script>

<template>
  <div class="f cg-2">
    <NInput
      v-model="text"
      class="w-100 pr-0"
      placeholder="Введите ваше сообщение"
      :type="EType.Text"
    >
      <template #after>
        <NButton
          @click="send"
          :disabled="!text"
          :color="EColor.Brand"
          square
          style="z-index: 1"
        >
          <span class="material-symbols-rounded"> mail </span>
        </NButton>
      </template>
    </NInput>
  </div>
</template>

<style lang="less" scoped></style>
