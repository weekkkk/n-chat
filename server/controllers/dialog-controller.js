const DialogDto = require('../dtos/dialog-dto');
const UserDto = require('../dtos/user-dto');
const dialogService = require('../service/dialog-service');
const tokenService = require('../service/token-service');
const userService = require('../service/user-service');
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
  async getDialogs(req, res, next) {
    try {
      console.log('getDialogs');
      const { refreshToken } = req.cookies;
      const { user } = await tokenService.findToken(refreshToken);
      const dialogs = await dialogService.getDialogs(user);

      const dialogsData = [];
      for (let dialog of dialogs) {
        const usersData = [];
        for (let i = 0; i < dialog.users.length; i++) {
          console.log(dialog.users[i], user);
          if (dialog.users[i] + '' != user + '') {
            const userData = await userService.findUser(dialog.users[i]);
            usersData.push(userData);
          }
        }
        dialogsData.push(new DialogDto(dialog, usersData));
      }

      return res.json(dialogsData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new DialogController();
