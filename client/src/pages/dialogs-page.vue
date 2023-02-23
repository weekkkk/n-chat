<script lang="ts" setup>
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import NInput from '@/components/input/n-input.vue';
import NcDialog from '@/components/project/nc-dialog.vue';
</script>

<template>
  <h2 class="ta-c lh-no">диалоги</h2>

  <NInput placeholder="Найти диалог" class="pr-0">
    <template #after>
      <NButton :color="EColor.Brand" square style="z-index: 1">
        <span class="material-symbols-rounded"> search </span>
      </NButton>
    </template>
  </NInput>

  <ul class="dialogs f fd-col">
    <li v-for="i in 100" :key="i">
      <NcDialog class="py-2 px-3" name="test" message="test" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul.dialogs {
  margin: 0 calc(var(--n-indent-3) * -1);
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  li {
    border-bottom: 1px solid var(--n-second-0);
    &:first-child {
      border-top: 1px solid var(--n-second-0);
    }
  }
}
</style>
