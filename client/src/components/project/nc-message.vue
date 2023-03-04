<script lang="ts" setup>
import NAvatar from '@/components/avatar/n-avatar.vue';
import { IMessage } from '@/interfaces';
import { useUserStore } from '@/stores';
import { PropType } from 'vue';
/**
 * * Стор пользователя
 */
const userStor = useUserStore();
/**
 * * Свойства
 */
const props = defineProps({
  message: { type: Object as PropType<IMessage>, default: undefined },
});
/**
 * * Является ли сообщение позьзовательским
 */
const personal =
  !!userStor.user && !!props.message && userStor.user.id == props.message.user;
</script>

<template>
  <li class="nc-message" :class="{ personal }">
    <div v-if="message" class="message f fd-col rg-2 px-3 py-2 br-3">
      <p>
        {{ message?.text }}
      </p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.nc-message {
  display: flex;
  justify-content: flex-start;
  &.personal {
    justify-content: flex-end;
    .message {
      background-color: var(--n-brand);
      color: var(--n-default);
    }
  }
  .message {
    max-width: 80%;
    width: fit-content;
    background-color: var(--n-second-0);
  }
}
</style>
