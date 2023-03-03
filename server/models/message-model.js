const { Schema, model } = require('mongoose');

/**
 * * Сообщение в диалоге
 */
const MessageSchema = new Schema({
  /**
   * * Текст сообщения
   */
  text: { type: String, required: true },
  /**
   * * Пользователь, который отправил (которому принадлежит сообщение)
   */
  user: { type: Schema.Types.ObjectId,ref: 'User',required: true },
  /**
   * * Диалог, в котором находится сообщение
   */
  dialog: {
    type: Schema.Types.ObjectId,
    ref: 'Dialog',
    required: true,
  },
});

module.exports = model('Message', MessageSchema);
