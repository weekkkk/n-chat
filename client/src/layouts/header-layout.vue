<script lang="ts" setup>
import NAvatar from '@/components/avatar/n-avatar.vue';
import NButton from '@/components/button/n-button.vue';
import NPopover from '@/components/popover/n-popover.vue';
import { EPosition } from '@/components/popover/enums';
import { EColor } from '@/components/enums';
import { useUserStore } from '@/stores';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

/**
 * * Стор пользоватля
 */
const userStore = useUserStore();
/**
 * * Выход
 */
function logout() {
  if (!userStore.user) return;
  userStore.logout().then(() => {
    router.push({ name: 'login' });
  });
}
</script>

<template>
  <header class="header-layout bg-default p-3 f ai-c jc-sb br-3">
    <div class="f ai-c g-3">
      <h3 class="lh-no">n<span class="c-brand">chat</span></h3>
      <h2 class="lh-no ta-c">{{ route.meta.title }}</h2>
    </div>

    <div class="f ai-c cg-3">
      <NButton
        @click="router.push({ name: 'chat' })"
        :color="EColor.Brand"
        :no-fill="route.name != 'chat'"
        square
      >
        <span class="material-symbols-rounded"> mail </span>
      </NButton>
      <NButton
        @click="router.push({ name: 'users' })"
        :color="EColor.Brand"
        :no-fill="route.name != 'users'"
        square
      >
        <span class="material-symbols-rounded"> group </span>
      </NButton>
      <NPopover
        v-if="userStore.user"
        width="324px"
        :color="EColor.Default"
        :position="EPosition.Bottom"
        classes="f fd-col rg-3 p-2"
      >
        <template #content>
          <div class="f ai-c bg-second-0 br-3 p-2 cg-2">
            <NAvatar size="40px" :name="userStore.user.email" />
            <p class="fw-medium">{{ userStore.user.email }}</p>
          </div>
          <ul class="header-actions_list f fd-col">
            <li class="f ai-c py-2 cg-2 c-danger" @click="logout">
              <span class="material-symbols-rounded"> logout </span>
              <p class="fw-medium">Выход</p>
            </li>
          </ul>
        </template>
        <NButton :color="EColor.Second" square no-fill>
          <span class="material-symbols-rounded"> more_horiz </span>
        </NButton>
      </NPopover>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss">
ul.header-actions_list {
  border-top: 1px solid var(--n-second-0);
  border-bottom: 1px solid var(--n-second-0);
  li {
    position: relative;
    cursor: pointer;
    &::before {
      content: '';
      transition: var(--n-ctrl-ts);
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(var(--n-indent-2) * -1);
      right: calc(var(--n-indent-2) * -1);
      z-index: 0;
      opacity: 0;
      background-color: var(--n-base);
    }
    &.c-danger::before {
      background-color: var(--n-danger);
    }
    &:hover {
      &::before {
        opacity: 0.1;
      }
    }
    &:not(:last-child) {
      border-bottom: 1px solid var(--n-second-0);
    }
  }
}
</style>
