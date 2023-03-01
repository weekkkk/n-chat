const dialogService = require('../service/dialog-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class DialogController {
  async create(req, res, next) {
    try {
      const { users, isGroup } = req.body;
      const dialog = await dialogService.create(users, isGroup);
      return res.json(dialog);
    } catch (e) {
      next(e);
    }
  }

  async getDialogs() {
    try {
      const { user } = req.params;
      const dialogs = await dialogService.getDialogs(user);
      return res.json(dialogs);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new DialogController();
