import $api from '@/http';
import { IUser } from '@/interfaces';
import { AxiosResponse } from 'axios';
/**
 * * Сервис пользователя
 */
export default class UserService {
  /**
   * * Получить пользователей
   */
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users');
  }
}
