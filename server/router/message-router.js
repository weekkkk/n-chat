const express = require('express');
const router = express.Router();

const getMessageController = require('../controllers/message-controller');
const tokenService = require('../service/token-service');
const messageService = require('../service/message-service');

module.exports = function (wsInstance) {
  const messageController = getMessageController(wsInstance);
  /**
   * * Получить диалоги
   */
  router.get('/individualDialogMessages/:recipient', messageController.getIndividialDialogMessages);

  /**
   * * Подключение к Web Socket
   */
  router.ws('/', (ws, req) => {
    const { refreshToken } = req.cookies;
    tokenService.findToken(refreshToken).then((tokenData) => {
      const { user } = tokenData;
      ws.user = user;
    });
    ws.on('message', (message) => {
      const { event, data } = JSON.parse(message);
      switch (event) {
        case 'message-to-user':
          messageController.sendMessageToUser(ws, req, data);
          break;
        case 'message-to-group':
          break;
      }
    });
  });

  return router;
};

// module.exports = router;
