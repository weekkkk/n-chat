/**
 * * Данные пользователя, отправляемые на клиент
 */
module.exports = class MessageDto {
  /**
   * * Текст
   */
  text;
  /**
   * * Уникальный ключ
   */
  id;
  /**
   * * Пользователь, которому принадлежит сообщение
   */
  user;

  constructor(model, user) {
    this.text = model.text;
    this.id = model._id;
    this.user = user;
  }
};
