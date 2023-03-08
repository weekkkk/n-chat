/**
 * * Сообщение
 */
export default interface IMessage {
  /**
   * * Уникальный ключ сообщения
   */
  id: string;
  /**
   * * Id пользователя, которому принадлежит сообщение
   */
  user: string;
  /**
   * * Id диалога, которому принадлежит сообщение
   */
  dialog: string;
  /**
   * * Текст сообщения
   */
  text: string;
}
