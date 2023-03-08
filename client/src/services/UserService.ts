import { AxiosResponse } from 'axios';
import $authorization from '@/api/authorization';
import { IUser } from '@/interfaces';
/**
 * * Сервис пользователя
 */
export default class UserService {
  /**
   * * Получить пользователей
   */
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $authorization.get<IUser[]>('/users');
  }
}
