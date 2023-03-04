<script lang="ts" setup>
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import { EType } from '@/components/input/enums';
import NInput from '@/components/input/n-input.vue';
</script>

<template>
  <div class="f cg-2">
    <NInput
      class="w-100 pr-0"
      placeholder="Введите ваше сообщение"
      :type="EType.Text"
    >
      <template #after>
        <NButton :color="EColor.Brand" square style="z-index: 1">
          <span class="material-symbols-rounded"> mail </span>
        </NButton>
      </template>
    </NInput>
  </div>
</template>

<style lang="less" scoped></style>
