const express = require('express');
const expressWs = require('express-ws');
const router = express.Router();
const wsInstance = expressWs(router);
const dialogController = require('../controllers/dialog-controller');

router.get('/dialogs', dialogController.getUserDialogs);

const API_URL = '/dialog-api';

// Обработчик подключения нового клиента
router.ws('/auth-api', (ws, req) => {
  console.log('A user connected');

  // Обработчик сообщений от клиента
  ws.on('message', (msg) => {
    console.log(`Message: ${msg}`);

    // Отправляем сообщение всем подключенным клиентам
    router.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  // Обработчик отключения клиента
  ws.on('close', () => {
    console.log('A user disconnected');
  });
});

module.exports = router;
