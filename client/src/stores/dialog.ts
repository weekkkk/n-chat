import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ws } from '@/main';
import { IMessage } from '@/models/IMessage';
import { IWSRequest } from '@/models/IWSRequest';
import DialogService from '@/services/DialogService';
import { EWSEvent } from '@/enums';
import { IDialog } from '@/models/IDialog';

export const useDialogStore = defineStore('dialog', () => {
  async function create(users: string[], isGroup: boolean) {
    try {
      const response = await DialogService.create(users, isGroup);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  // function create(dialog: Partial<IDialog>) {
  //   const req: IWSRequest<Partial<IDialog>> = {
  //     event: EWSEvent.CreateDialog,
  //     data: dialog,
  //   };
  //   const reqStr = JSON.stringify(req);
  //   ws.send(reqStr);
  // }

  return { create };
});
