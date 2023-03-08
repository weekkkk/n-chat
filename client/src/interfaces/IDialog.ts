import IUser from './IUser';
/**
 * * Диалог
 */
export default interface IDialog {
  /**
   * * Уникальный ключ диалога
   */
  id: string;
  /**
   * * Пользователи диалога
   */
  users: IUser[];
}
