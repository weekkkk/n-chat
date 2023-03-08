const UserDto = require('./user-dto');

/**
 * * Данные диалога, отправляемые на клиент
 */
module.exports = class DialogDto {
  /**
   * * Уникальный ключ
   */
  id;
  /**
   * * Уникальный ключ
   */
  users;

  constructor(model, users) {
    this.id = model._id;
    this.users = users;
  }
};
