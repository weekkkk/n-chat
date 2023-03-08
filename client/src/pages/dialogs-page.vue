<script lang="ts" setup>
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import NInput from '@/components/input/n-input.vue';
import NcDialog from '@/components/project/nc-dialog.vue';
import { useDialogStore } from '@/stores';

const dialogStore = useDialogStore();

dialogStore.getDialogs();
</script>

<template>
  <NInput placeholder="Найти диалог" class="pr-0">
    <template #after>
      <NButton :color="EColor.Brand" square style="z-index: 1">
        <span class="material-symbols-rounded"> search </span>
      </NButton>
    </template>
  </NInput>

  <ul class="dialogs f fd-col">
    <li class="py-2 px-3">
      <NcDialog
        v-for="dialog in dialogStore.dialogs"
        :key="dialog.id"
        :dialog="dialog"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul.dialogs {
  flex-grow: 1;
  margin: 0 calc(var(--n-indent-3) * -1);
  overflow-y: auto;
  overflow-x: hidden;
  li {
    border-bottom: 2px dotted var(--n-second-0);
    &:first-child {
      border-top: 2px dotted var(--n-second-0);
      border-top-right-radius: var(--n-indent-3);
      border-top-left-radius: var(--n-indent-3);
    }
    &:last-child {
      border-bottom-right-radius: var(--n-indent-3);
      border-bottom-left-radius: var(--n-indent-3);
    }
    cursor: pointer;
    &:hover {
      background-color: var(--n-second-0);
    }
    &:active {
      background-color: var(--n-second-25);
    }
  }
}
</style>
