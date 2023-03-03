import $api from '@/http';
import { IDialog } from '@/models/IDialog';
import { AxiosResponse } from 'axios';

export default class DialogService {
  static create(users: string[], isGroup: boolean) {
    return $api.post<IDialog>('/createDialog', { users, isGroup });
  }

  static getDialogs(user?: string): Promise<AxiosResponse<IDialog[]>> {
    return $api.get<IDialog[]>('/dialogs', { params: { user } });
  }
}
