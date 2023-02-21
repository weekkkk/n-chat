<script lang="ts" setup>
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import NInput from '@/components/input/n-input.vue';
import { EType } from '@/components/input/enums';
</script>

<template>
  <div class="authorization-row">
    <div class="f ai-c">
      <h3 class="lh-no">n<span class="c-brand">chat</span></h3>
    </div>
    <h2 class="ta-c">авторизация</h2>
  </div>

  <div class="f fd-col authorization-rows_wrap">
    <div class="authorization-row py-3">
      <p class="fw-medium c-second-100 f ai-c">
        <label for="name">Логин</label>
      </p>
      <NInput id="name" placeholder="Введите ваш логин" :size="ESize.Large" />
    </div>
    <div class="authorization-row py-3">
      <p class="fw-medium c-second-100 f ai-c">
        <label for="password">Пароль</label>
      </p>
      <NInput
        id="password"
        placeholder="Введите ваш пароль"
        :type="EType.Password"
        :size="ESize.Large"
      />
    </div>
  </div>

  <div class="f jc-c ai-c cg-4">
    <NButton :color="EColor.Brand" :size="ESize.Large"> войти </NButton>
    <a class="c-brand"> Регистрация </a>
  </div>
</template>

<style lang="scss" scoped>
.authorization {
  &-rows_wrap {
    border-top: 1px solid var(--n-second-0);
    border-bottom: 1px solid var(--n-second-0);
    > div:not(:last-child) {
      border-bottom: 1px solid var(--n-second-0);
    }
  }
  &-row {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
</style>
