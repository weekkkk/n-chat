import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { API_URL } from '@/api/authorization';
import { IDialog, IUser } from '@/interfaces';
import { IAuthResponse } from '@/api/authorization/interfaces';
import { DialogService } from '@/services';

/**
 * * Стор для работы с сообщениями
 */
const useDialogStore = defineStore('dialog', () => {
  /**
   * * Соообщения
   */
  const dialogs = ref<IDialog[]>();

  /**
   * * Получить диалоги
   */
  async function getDialogs() {
    try {
      const response = await DialogService.getDialogs();
      console.log(response);
      dialogs.value = response.data;
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  return { dialogs, getDialogs };
});

export default useDialogStore;
