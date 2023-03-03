<script lang="ts" setup>
const props = defineProps({
  /**
   * * Текущий параметр роута
   */
  valid: { type: Boolean, default: false },
  /**
   * * Имя
   */
  name: { type: String, default: '' },
});
</script>

<template>
  <RouterView :name="name" v-if="valid" />
  <RouterView v-else :name="`${name}-placeholder`" />
</template>

<style lang="less" scoped></style>
