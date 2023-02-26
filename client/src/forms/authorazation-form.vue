<script lang="ts" setup>
import { computed, ref } from 'vue';
import NInput from '@/components/input/n-input.vue';
import { EType } from '@/components/input/enums';
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import { useRoute, useRouter } from 'vue-router';
import { REGISTRATION, LOGIN, ACTIVATION, CHAT } from '@/router/modules/names';
import { useUserStore } from '@/stores/user';

const route = useRoute();
const router = useRouter();
/**
 * * Страница регистрации или авторизации
 */
const isRegistartion = computed(() => route.name == 'registration');
/**
 * * Почта
 */
const email = ref('');
/**
 * * Пароль
 */
const password = ref('');
/**
 * * Стор
 */
const userStore = useUserStore();
/**
 * * Регистрация
 */
function registration() {
  userStore.registration(email.value, password.value).then(() => {
    router.push({ name: ACTIVATION });
  });
}
/**
 * * Авторизация
 */
function login() {
  userStore.login(email.value, password.value).then(() => {
    router.push({ name: 'test' });
  });
}
/**
 * * Тип инпута с паролем
 */
const passwordInputType = ref<EType>(EType.Password);
</script>

<template>
  <form class="f fd-col" @submit.prevent>
    <div class="form-row py-3 cg-3 rg-2">
      <div>
        <label for="user-email" class="fw-medium c-second-100">Email</label>
      </div>

      <NInput v-model="email" id="user-email" placeholder="Введите ваш Email" />
    </div>

    <div class="form-row py-3 cg-3 rg-2">
      <div>
        <label for="user-password" class="fw-medium c-second-100">Пароль</label>
      </div>

      <NInput
        class="pr-0"
        v-model="password"
        id="user-password"
        placeholder="Введите ваш пароль"
        :type="passwordInputType"
      >
        <template #after>
          <NButton
            v-if="passwordInputType == EType.Password"
            @click="passwordInputType = EType.Text"
            :color="EColor.Second"
            square
            no-fill
            style="z-index: 1"
          >
            <span class="material-symbols-rounded"> visibility </span>
          </NButton>
          <NButton
            v-else
            @click="passwordInputType = EType.Password"
            :color="EColor.Brand"
            square
            no-fill
            style="z-index: 1"
          >
            <span class="material-symbols-rounded"> visibility_off </span>
          </NButton>
        </template>
      </NInput>
    </div>
  </form>

  <div class="form-row g-3">
    <div class="f jc-c cg-3">
      <NButton
        @click="router.push({ name: REGISTRATION })"
        :no-fill="!isRegistartion"
        :color="EColor.Second"
        square
      >
        <span class="material-symbols-rounded"> app_registration </span>
      </NButton>
      <NButton
        @click="router.push({ name: LOGIN })"
        :no-fill="isRegistartion"
        :color="EColor.Second"
        square
      >
        <span class="material-symbols-rounded"> login </span>
      </NButton>
    </div>

    <NButton v-if="!isRegistartion" @click="login" :color="EColor.Brand">
      Войти
    </NButton>
    <NButton v-else @click="registration" :color="EColor.Brand">
      Зарегистрироваться
    </NButton>
  </div>
</template>

<style lang="scss" scoped>
.password_visible-icon {
  display: inline-flex;
  cursor: pointer;
}
</style>
