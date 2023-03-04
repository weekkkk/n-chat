<script lang="ts" setup>
import NButton from '@/components/button/n-button.vue';
import { EColor } from '@/components/enums';
import { useUserStore } from '@/stores';
import { useRouter } from 'vue-router';

const router = useRouter();

/**
 * * Стор пользователя
 */
const userStore = useUserStore();
/**
 * * Отменить регистрацию пользователя
 */
function cancelRegistration() {
  if (!userStore.user) return;
  userStore.cancelRegistration(userStore.user.id).then(() => {
    router.push({ name: 'registration' });
  });
}
</script>

<template>
  <div class="f fd-col rg-2">
    <p>
      На ваш email
      <span class="c-brand fw-medium"> {{ userStore.user?.email }} </span> было
      отправлено письмо с ссылкой для подтверждения аккаунта.
    </p>

    <p>Если вы ввели неверный email, то воспользуйтесь отменой регистрации.</p>
  </div>

  <div class="f fd-col ai-c rg-3">
    <NButton @click="cancelRegistration" :color="EColor.Second" no-fill>
      Отмена регистрации
    </NButton>
  </div>
</template>

<style lang="less" scoped></style>
