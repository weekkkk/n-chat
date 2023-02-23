<script lang="ts" setup>
import NAvatar from '@/components/avatar/n-avatar.vue';
/**
 * * Свойства
 */
const props = defineProps({
  /**
   * * Имя
   */
  name: { type: String, default: '' },
  /**
   * * Сообщение
   */
  message: { type: String, default: '' },
});
</script>

<template>
  <div class="nc-dialog f ai-c cg-3">
    <NAvatar size="48px" :name="name" />
    <div class="info w-100 f fd-col rg-2">
      <p class="fw-medium lh-no">
        {{ name }}
      </p>
      <p class="fs-small-p lh-no c-second-75">
        {{ message }}
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
