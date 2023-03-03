const messageService = require('../service/message-service');
/**
 * * Методы сообщения
 */
class MessageController {
  /**
   * * Отравить сообщение в диалог
   */
  async send(req, res, next) {
    try {
      const { dialog, text } = req.body;
      const message = messageService.send(dialog, text);
      return res.json(message);
    } catch (e) {
      next(e);
    }
  }
  /**
   * * Получить сообщения диалога
   */
  async getDialogMessages(req, res, next) {
    try {
      const { dialog } = req.params;
      const messages = await messageService.getDialogMessages(dialog);
      return res.json(messages);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new MessageController();
