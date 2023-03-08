<script lang="ts" setup>
import NAvatar from '@/components/avatar/n-avatar.vue';
import { IDialog } from '@/interfaces';
import { useUserStore } from '@/stores';
import { PropType } from 'vue';
/**
 * * Свойства
 */
const props = defineProps({
  /**
   * * Имя
   */
  dialog: { type: Object as PropType<IDialog>, default: undefined },
});
/**
 * * Текущий пользователь
 */
const { user } = useUserStore();
</script>

<template>
  <div class="nc-dialog f ai-c cg-3" v-if="dialog">
    <NAvatar size="48px" :name="dialog.users[0].email.toString()" />
    <div class="info w-100 f fd-col rg-2">
      <p class="fw-medium">
        {{ dialog.users[0].email.toString() }}
      </p>
      <p class="fs-small-p lh-no c-second-75">
        <!-- {{ message }} -->
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nc-dialog {
  .info {
    overflow: hidden;
    p {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
