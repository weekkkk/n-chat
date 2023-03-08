const DialogModel = require('../models/dialog-model');
const userModel = require('../models/user-model');
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
  async getDialogs(user) {
    const userIds = [user];
    const dialogs = await DialogModel.find({
      users: {
        $in: userIds,
      },
    });
    return dialogs;
  }
  /**
   * * Получить диалог по пользователям
   * @param users - массив id пользователей
   */
  async getIndividualDialog(sender, recipient) {
    const dialog = await DialogModel.findOne({
      $and: [
        { users: { $all: [sender, recipient] } },
        { users: { $size: 2 } },
      ],
    });
    return dialog;
  }
}

module.exports = new DialogService();
