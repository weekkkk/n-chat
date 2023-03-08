import { AxiosResponse } from 'axios';
import $dialog from '@/api/dialog';
import { IDialog } from '@/interfaces';
/**
 * * Сервис пользователя
 */
export default class UserService {
  /**
   * * Получить пользователей
   */
  static getDialogs(): Promise<AxiosResponse<IDialog[]>> {
    return $dialog.get<IDialog[]>('/dialogs');
  }
}
