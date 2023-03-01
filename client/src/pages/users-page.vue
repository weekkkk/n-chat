<script lang="ts" setup>
import { ref } from 'vue';
import { IUser } from '@/models/IUser';
import { useUserStore } from '@/stores/user';
import NAvatar from '@/components/avatar/n-avatar.vue';
import NButton from '@/components/button/n-button.vue';
import { EColor } from '@/components/enums';

const userStore = useUserStore();

const users = ref<IUser[]>();

const setUsers = async () => {
  users.value = await userStore.getUsers();
};
setUsers();
</script>

<template>
  <ul class="users f fd-col" v-if="users">
    <li v-for="user in users" :key="user.id" class="user-li p-3 f ai-c cg-3">
      <NAvatar :name="user.email" size="40px" />
      <p class="fw-medium w-100">
        {{ user.email }}
      </p>

      <NButton :color="EColor.Brand" square>
        <span class="material-symbols-rounded"> mail </span>
      </NButton>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.users {
  margin: 0 -16px;
}
</style>
