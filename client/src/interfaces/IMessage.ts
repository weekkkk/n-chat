import IUser from './IUser';
/**
 * * Сообщение
 */
export default interface IMessage {
  /**
   * * Уникальный ключ сообщения
   */
  id: string;
  /**
   * * Пользователь, которому принадлежит сообщение
   */
  user: IUser;
  /**
   * * Id диалога, которому принадлежит сообщение
   */
  dialog: string;
  /**
   * * Текст сообщения
   */
  text: string;
}
