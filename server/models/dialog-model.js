const { Schema, model } = require('mongoose');

/**
 * * Диалог
 */
const DialogSchema = new Schema({
  /**
   * * Пользователи
   */
  users: [{ type: Schema.Types.ObjectId,ref: 'User' }],
  /**
   * * Сообщения
   */
  messages: [{ type: Schema.Types.ObjectId,ref: 'Message' }],
});

module.exports = model('Dialog', DialogSchema);
