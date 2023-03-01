const userService = require('../service/user-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class DialogController {
  async create() {}

  async getUserDialogs() {}
}

module.exports = new DialogController();
