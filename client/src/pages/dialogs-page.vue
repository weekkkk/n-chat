<script lang="ts" setup>
import { useRouter } from 'vue-router';
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import NInput from '@/components/input/n-input.vue';
import NcDialog from '@/components/project/nc-dialog.vue';
import { IDialog } from '@/interfaces';
import { useDialogStore } from '@/stores';

const router = useRouter();

/**
 * * Стор диалогов
 */
const dialogStore = useDialogStore();
/**
 * * Получить диалоги
 */
dialogStore.getDialogs();
/**
 * * Переход к диалогу
 */
function goToDialog(dialog: IDialog) {
  if (dialog.users.length == 1) {
    router.push({ name: 'dialog', params: { recipient: dialog.users[0].id } });
  }
}
</script>

<template>
  <div class="f fd-col py-2 px-3 search">
    <NInput placeholder="Найти диалог" class="pl-0 pr-0" style="outline: none">
      <template #after>
        <NButton :color="EColor.Brand" square style="z-index: 1">
          <span class="material-symbols-rounded"> search </span>
        </NButton>
      </template>
    </NInput>
  </div>

  <ul class="dialogs f fd-col">
    <li
      class="py-2 px-3"
      v-for="dialog in dialogStore.dialogs"
      :key="dialog.id"
      @click="goToDialog(dialog)"
    >
      <NcDialog :dialog="dialog" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.search {
  border-bottom: 1px solid var(--n-second-0);
}
ul.dialogs {
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  li {
    border-bottom: 1px solid var(--n-second-0);
    // &:first-child {
    //   border-top: 1px solid var(--n-second-0);
    // }
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
