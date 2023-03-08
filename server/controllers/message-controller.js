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
        const userData = await userService.findUser(message.user);
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
    const recipientId = new ObjectId(recipient);

    const dialog = await dialogService.getIndividualDialog(
      ws.user,
      recipientId
    );
    if (!dialog) dialog = await dialogService.create([ws.user, recipient]);
    const message = await messageService.create(dialog.id, ws.user, text);

    const userData = await userService.findUser(message.user);
    const messageData = new MessageDto(message, userData);

    const wsMessage = {
      event: 'message-to-user',
      data: messageData,
    };

    this.wss.clients.forEach((client) => {
      if (client.user == recipient) {
        client.send(JSON.stringify(wsMessage));
      }
    });

    return message;
  }
}

module.exports = (wsInstance) => new MessageController(wsInstance);
