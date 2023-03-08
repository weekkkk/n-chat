import { AxiosResponse } from 'axios';
import $message from '@/api/message';
import { IMessage } from '@/interfaces';
/**
 * * Сервис пользователя
 */
export default class UserService {
  /**
   * * Получить пользователей
   */
  static getIndividualMessages(
    recipient: string
  ): Promise<AxiosResponse<IMessage[]>> {
    return $message.get<IMessage[]>('/individualDialogMessages', {
      params: { recipient },
    });
  }
}
