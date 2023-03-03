/**
 * * Данные пользователя, отправляемые на клиент
 */
module.exports = class UserDto {
  /**
   * * Почта
   */
  email;
  /**
   * * Уникальный ключ
   */
  id;
  /**
   * * Активирован ли пользователь
   */
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
};
