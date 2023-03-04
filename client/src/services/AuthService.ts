import $api from '@/http';
import { IAuthResponse } from '@/http/interfaces';
import { AxiosResponse } from 'axios';
/**
 * * Сервис авторизации
 */
export default class AuthService {
  /**
   * * Вход
   * @param email - почта
   * @param password - пароль
   */
  static login (
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/login', { email, password });
  }
  /**
   * * Регистрация
   * @param email - почта
   * @param password - пароль
   */
  static registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/registration', { email, password });
  }
  /**
   * * Отмена регистрации
   * @param userId - id пользователя
   * @returns 
   */
  static cancelRegistration(userId: string): Promise<AxiosResponse<void>> {
    return $api.post('/cancelRegistration', { userId });
  }
  /**
   * * Выход
   */
  static logout(): Promise<void> {
    return $api.post('/logout');
  }
}
