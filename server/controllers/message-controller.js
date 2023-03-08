const axios = require('axios');
const messageService = require('../service/message-service');
const tokenService = require('../service/token-service');
const dialogService = require('../service/dialog-service');
const { ObjectId } = require('mongodb');
const ApiError = require('../exceptions/api-error');
const MessageDto = require('../dtos/message-dto');
const userService = require('../service/user-service');
/**
 * * Методы сообщения
 */
class MessageController {
  constructor(wsInstance) {
    this.wss = wsInstance.getWss();
  }
  /**
   * * Создать сообщение
   */
  async create(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      console.log(refreshToken);
      const { dialog, text } = req.body;
      const { user } = await tokenService.findToken(refreshToken);
      console.log({ dialog, user, text });
      const message = await messageService.create(dialog, user, text);
      return res.json(message);
    } catch (e) {
      next(e);
    }
  }
  /**
   * * Получить сообщения индивидуального диалога
   */
  async getIndividialDialogMessages(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const { recipient } = req.params;

      const { user } = await tokenService.findToken(refreshToken);
      if (!user) throw new ApiError.UnauthorizedError();

      console.log({ user, recipient });

      const dialog = await dialogService.getIndividualDialog(user, recipient);
      if (!dialog)
        return next(
          ApiError.BadRequest('Диалог с данными пользователями не найден')
        );

      const messages = await messageService.getMessages(dialog);

      const messagesData = [];
      for (let message of messages) {
        const userData = await userService.findUser(user);
        messagesData.push(new MessageDto(message, userData));
      }

      return res.json(messagesData);
    } catch (e) {
      next(e);
    }
  }
  /**
   * * Отправить сообщение
   */
  async sendMessageToUser(ws, req, data) {
    const { recipient, text } = data;
    recipient = new ObjectId(recipient);

    const { dialog } = await dialogService.getIndividualDialog(
      ws.user,
      recipient
    );
    if (!dialog) dialog = await dialogService.create([ws.user, recipient]);
    const { message } = await messageService.create(dialog.id, user, text);

    const recipientWs = this.wss.clients.find(
      (client) => client.user == recipient
    );

    recipientWs.send(JSON.stringify(message));

    return message;
  }
}

module.exports = (wsInstance) => new MessageController(wsInstance);
