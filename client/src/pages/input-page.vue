<script lang="ts" setup>
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import { EType } from '@/components/input/enums';
import NInput from '@/components/input/n-input.vue';
import { useDialogStore } from '@/stores/dialog';
import { useMessageStore } from '@/stores/message';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const props = defineProps({
  /**
   * * Id диалога
   */
  userId: { type: String, default: '' },
});

const userStore = useUserStore();
const dialogStore = useDialogStore();
const messageStore = useMessageStore();

const dialogId = ref('64026015caa317cfb3975924');

const message = ref('');

async function sendMessage() {
  if (!userStore.user || !props.userId) return;

  // if (!messageStore.messages?.length) {
  //   const users = [userStore.user.id, props.userId];
  //   const dialog = await dialogStore.create(users, false);
  //   if (dialog?.id) dialogId.value = dialog.id;
  // }

  if (!dialogId.value) return;
  console.log(dialogId.value);
  messageStore.send({
    sender: userStore.user.id,
    dialog: dialogId.value,
    text: message.value,
  });
}
</script>

<template>
  <div class="f cg-2">
    <NInput
      v-model="message"
      class="w-100 pr-0"
      placeholder="Введите ваше сообщение"
      :type="EType.Text"
    >
      <template #after>
        <NButton
          :disabled="!message"
          @click="sendMessage"
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
