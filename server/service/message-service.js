const MessageModel = require('../models/message-model');

/**
 * * Сервис сообщений
 */
class MessageService {
  /**
   * * Отправить сообщение
   * @param dialog - id диалога
   * @param text - текст диалога
   */
  async send(dialog, text) {
    const message = await DialogModel.create({ dialog, text });
    return message;
  }
  /**
   * * Получить сообщения диалога
   * @param dialog - id диалога
   */
  async getDialogMessages(dialog) {
    const messages = await MessageModel.findOne({ dialog });
    return messages;
  }
}

module.exports = new MessageService();
