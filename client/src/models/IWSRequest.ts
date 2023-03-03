import { EWSEvent } from '@/enums';

/**
 * * Запрос Web Socket
 */
export interface IWSRequest<T> {
  /**
   * * Событие
   */
  event: EWSEvent;
  /**
   * * Данные
   */
  data: T;
}
