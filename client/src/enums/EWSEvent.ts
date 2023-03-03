/**
 * * Типы событий Web Socket
 */
enum EWSEvent {
  /**
   * * Создать диалог
   */
  CreateDialog = 'create-dialog',
  /**
   * * Сообщение в диалоге
   */
  SendMessage = 'send-message',
}
export default EWSEvent;
