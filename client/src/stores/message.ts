import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ws } from '@/main';
import { IMessage } from '@/models/IMessage';
import { IWSRequest } from '@/models/IWSRequest';
import MessageService from '@/services/MessageService';
import { EWSEvent } from '@/enums';

export const useMessageStore = defineStore('message', () => {
  const messages = ref<IMessage[]>();

  async function getMessages(dialog: string) {
    try {
      const response = await MessageService.getMessages(dialog);
      console.log(response);
      messages.value = response.data;
    } catch (e) {
      console.log(e);
    }
  }

  function send(message: Partial<IMessage>) {
    try {
      const req: IWSRequest<Partial<IMessage>> = {
        event: EWSEvent.SendMessage,
        data: message,
      };
      const reqStr = JSON.stringify(req);
      ws.send(reqStr);
    } catch (e) {
      console.log(e);
    }
  }

  return { messages, getMessages, send };
});
