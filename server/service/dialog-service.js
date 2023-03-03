const DialogModel = require('../models/dialog-model');

/**
 * * Сервис диалога
 */
class DialogService {
  /**
   * * Создать диалог
   * @param users - пользователи диалога
   */
  async create(users) {
    const dialog = await DialogModel.create({ users });
    return dialog;
  }
  /**
   * * Получить диалоги пользователя
   * @param user - id пользователя
   */
  async getUserDialogs(user) {
    const userIds = [user];
    const dialogs = await DialogModel.findOne({
      users: {
        $in: userIds,
      },
    });
    return dialogs;
  }
}

module.exports = new DialogService();
