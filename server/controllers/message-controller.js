const userService = require('../service/user-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class MessageController {
  send(ws, message) {
    // ws.send()
  }

  async create(req, res, next) {}

  async getMessages(req, res, next) {}
}

module.exports = new MessageController();
