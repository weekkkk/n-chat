import { API_URL } from '@/http';
import { IUser } from '@/models/IUser';
import { AuthResponse } from '@/models/response/AuthResponse';
import AuthService from '@/services/AuthService';
import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser>();
  const isAuth = ref(false);

  async function login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      isAuth.value = true;
      user.value = response.data.user;
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async function registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      isAuth.value = true;
      user.value = response.data.user;
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async function logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      isAuth.value = false;
      user.value = undefined;
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async function checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      isAuth.value = true;
      user.value = response.data.user;
    } catch (e) {
      console.log(e);
    }
  }

  return { user, isAuth, login, registration, logout, checkAuth };
});
