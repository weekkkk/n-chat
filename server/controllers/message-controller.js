const messageService = require('../service/message-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class MessageController {
  async create(req, res, next) {
    try {
      const { dialog, text } = req.body;
      const message = messageService.create(dialog, text);
      return res.json(message);
    } catch (e) {
      next(e);
    }
  }

  async getMessages(req, res, next) {
    try {
      const { dialog } = req.params;
      const messages = await messageService.getMessages(dialog);
      return res.json(messages);
    } catch (e) {
      next(e);
    }
  }

  send(data, wss) {

  }
}

module.exports = new MessageController();
