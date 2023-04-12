<script lang="ts" setup>
import NAvatar from '@/components/avatar/n-avatar.vue';
import { useDialogStore } from '@/stores';
import { computed } from 'vue';

const props = defineProps({
  /**
   * * Пользователь
   */
  recipient: { type: String, default: '' },
});

const dialogStore = useDialogStore();

const dialog = computed(() => {
  return dialogStore.dialogs.find(
    (dialog) => dialog.users[0].id == props.recipient
  );
});
</script>

<template>
  <div v-if="dialog" class="f ai-c cg-3">
    <NAvatar size="40px" :name="dialog.users[0].email" />
    <p class="fw-medium">{{ dialog.users[0].email }}</p>
  </div>
</template>

<style lang="less" scoped></style>
