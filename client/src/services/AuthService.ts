import { AxiosResponse } from 'axios';
import $authorization from '@/api/authorization';
import { IAuthResponse } from '@/api/authorization/interfaces';
/**
 * * Сервис авторизации
 */
export default class AuthService {
  /**
   * * Вход
   * @param email - почта
   * @param password - пароль
   */
  static login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $authorization.post<IAuthResponse>('/login', { email, password });
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
    return $authorization.post<IAuthResponse>('/registration', {
      email,
      password,
    });
  }
  /**
   * * Отмена регистрации
   * @param userId - id пользователя
   * @returns
   */
  static cancelRegistration(userId: string): Promise<AxiosResponse<void>> {
    return $authorization.post('/cancelRegistration', { userId });
  }
  /**
   * * Выход
   */
  static logout(): Promise<void> {
    return $authorization.post('/logout');
  }
}
