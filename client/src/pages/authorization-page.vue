<script lang="ts" setup>
import { ref } from 'vue';
import NButton from '@/components/button/n-button.vue';
import { EColor, ESize } from '@/components/enums';
import NInput from '@/components/input/n-input.vue';
import { EType } from '@/components/input/enums';
import NAvatar from '@/components/avatar/n-avatar.vue';

const image = ref('');
const login = ref('');
const password = ref('');
const showError = ref(false);

function enter() {
  if (!login.value || !password.value) showError.value = true;
}
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
        <label for="name">Автар</label>
      </p>
      <div class="dialog f ai-c cg-3">
        <NAvatar size="48px" :name="login" />
        <div class="dialog-info w-100 f fd-col ai-fs rg-2">
          <p v-if="login" class="fw-medium lh-no">{{ login }}</p>
          <p v-else class="br-1 bg-second-25 c-second-25 lh-no">Ваше имя</p>
          <p v-if="login" class="fs-small-p lh-no c-second-75">
            Привет, {{ login }}!
          </p>
          <p v-else class="br-1 fs-small-p bg-second-0 c-second-0 lh-no">
            Ваше сообщение
          </p>
        </div>
      </div>
    </div>
    <div class="authorization-row py-3">
      <p class="fw-medium c-second-100 f ai-c">
        <label for="name">Логин</label>
      </p>
      <NInput
        id="name"
        v-model="login"
        :danger="showError && !login"
        placeholder="Введите ваш логин"
        :size="ESize.Large"
      />
    </div>
    <div class="authorization-row py-3">
      <p class="fw-medium c-second-100 f ai-c">
        <label for="password">Пароль</label>
      </p>
      <NInput
        id="password"
        v-model="password"
        :danger="showError && !password"
        placeholder="Введите ваш пароль"
        :type="EType.Password"
        :size="ESize.Large"
      />
    </div>
  </div>

  <div class="f jc-c ai-c cg-4">
    <NButton @click="enter" :color="EColor.Brand" :size="ESize.Large"> войти </NButton>
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

.dialog {
  overflow: hidden;
  &-info {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    p {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &-wrap {
    display: grid;
  }
}
</style>
