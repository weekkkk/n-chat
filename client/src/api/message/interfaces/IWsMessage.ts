import { EWsMessageEvent } from '../enums';
/**
 * * Запрос для web socket сообщений
 */
export default interface IWsMessageRequest<T extends object> {
  /**
   * * Тип события
   */
  event: EWsMessageEvent;
  /**
   * * Данные
   */
  data: T;
}
