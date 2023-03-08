const { Schema, model } = require('mongoose');

/**
 * * Диалог
 */
const DialogSchema = new Schema({
  /**
   * * Пользователи
   */
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = model('Dialog', DialogSchema);
