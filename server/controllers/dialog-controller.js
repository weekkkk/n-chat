const dialogService = require('../service/dialog-service');
/**
 * * Методы диалога
 */
class DialogController {
  /**
   * * Создать диалог
   */
  async create(req, res, next) {
    try {
      const { users } = req.body;
      const dialog = await dialogService.create(users);
      return res.json(dialog);
    } catch (e) {
      next(e);
    }
  }
  /**
   * * Получить диалоги пользователя
   */
  async getUserDialogs(req, res, next) {
    try {
      const { user } = req.params;
      const dialogs = await dialogService.getUserDialogs(user);
      return res.json(dialogs);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new DialogController();
