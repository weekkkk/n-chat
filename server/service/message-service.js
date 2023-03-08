const MessageModel = require('../models/message-model');
/**
 * * Сервис сообщений
 */
class MessageService {
  /**
   * * Создать сообщение
   * @param dialog - id диалога
   * @param text - текст диалога
   */
  async create(dialog, user, text) {
    const message = await MessageModel.create({ dialog, user, text });
    return message;
  }
  /**
   * * Получить сообщения диалога
   * @param dialog - id диалога
   */
  async getMessages(dialog) {
    const messages = await MessageModel.findOne({ dialog });
    return messages;
  }

  broadcastMessage(message, dialog) {}
}

module.exports = new MessageService();
