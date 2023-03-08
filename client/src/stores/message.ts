import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { API_URL } from '@/api/message';
import { IMessage, IUser } from '@/interfaces';
import { IAuthResponse } from '@/api/authorization/interfaces';
import { MessageService } from '@/services';
import { IWsMessage } from '@/api/message/interfaces';
import { EWsMessageEvent } from '@/api/message/enums';

/**
 * * Стор для работы с сообщениями
 */
const useMessageStore = defineStore('message', () => {
  /**
   * * Соообщения
   */
  const messages = ref<IMessage[]>([]);

  /**
   * * Сокет
   */
  const ws = ref<WebSocket>();
  /**
   * * Подключить сокет
   */
  function connectWs() {
    if (ws.value?.OPEN) return;
    ws.value = new WebSocket(API_URL.replace('http', 'ws'));
    ws.value.onmessage = messageHandler;
  }
  /**
   * * Отправить сообщение пользователю
   */
  function sendMessageToUser(recipient: string, text: string) {
    try {
      if (!ws.value?.OPEN) throw new Error('Веб сокет закрыт');

      const message: IWsMessage<{ recipient: string; text: string }> = {
        event: EWsMessageEvent.MessageToUser,
        data: {
          recipient,
          text,
        },
      };

      ws.value.send(JSON.stringify(message));
    } catch (e) {
      console.log(e);
    }
  }
  /**
   * * Получить сообщение для пользователя
   */
  function messageToUserHandler(message: IMessage) {
    if (!ws.value?.OPEN) return;
    messages.value.push(message);
  }
  /**
   * * Отправить сообщение пользователю
   */
  function messageHandler(event: MessageEvent) {
    const message: IWsMessage<object> = JSON.parse(event.data);
    // switch (message.event) {
      // case EWsMessageEvent.MessageToUser:
        const messageData = message.data as IMessage;
        messageToUserHandler(messageData);
        // break;
    // }
  }

  /**
   * * Получить пользователей
   */
  async function getIndividualDialogMessages(recipient: string) {
    try {
      const response = await MessageService.getIndividualMessages(recipient);
      console.log(response);
      messages.value = response.data;
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  return {
    messages,
    getIndividualDialogMessages,
    connectWs,
    sendMessageToUser,
  };
});

export default useMessageStore;
