const { Schema, model } = require('mongoose');

/**
 * * Токен для обновления токена доступа пользователя
 */
const TokenSchema = new Schema({
  /**
   * * Пользователь, которому принадлежит токен
   */
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  /**
   * * Токен
   */
  refreshToken: { type: String, required: true },
});

module.exports = model('Token', TokenSchema);
