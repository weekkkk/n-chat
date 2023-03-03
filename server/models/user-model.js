const { Schema, model } = require('mongoose');

/**
 * * Пользователь
 */
const UserSchema = new Schema({
  /**
   * * Почта
   */
  email: { type: String, unique: true, required: true },
  /**
   * * Пароль
   */
  password: { type: String, required: true },
  /**
   * * Активинован ли аккаунт пользователя
   */
  isActivated: { type: Boolean, default: false },
  /**
   * * Ссылка для актиивации аккаунта (вернее ее часть, уникальный ключ)
   */
  activationLink: { type: String },
});

module.exports = model('User', UserSchema);
