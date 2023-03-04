/**
 * * Пользователь
 */
export default interface IUser {
  /**
   * * Уникальный ключ пользователя
   */
  id: string;
  /**
   * * Почта
   */
  email: string;
  /**
   * * Активирован ли пользователь
   */
  isActivated: boolean;
}
