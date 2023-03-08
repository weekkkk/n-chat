import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { API_URL } from '@/api/authorization';
import { IMessage, IUser } from '@/interfaces';
import { IAuthResponse } from '@/api/authorization/interfaces';
import { MessageService } from '@/services';

/**
 * * Стор для работы с сообщениями
 */
const useMessageStore = defineStore('message', () => {
  /**
   * * Соообщения
   */
  const messages = ref<IMessage[]>();

  /**
   * * Получить пользователей
   */
  async function getIndividualDialogMessages(recipient: string) {
    try {
      console.log({ recipient });
      const response = await MessageService.getIndividualMessages(recipient);
      console.log(response);
      messages.value = response.data;
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  return { messages, getIndividualDialogMessages };
});

export default useMessageStore;
