const express = require('express');
const expressWs = require('express-ws');
const router = express.Router();
const wsInstance = expressWs(router);

const userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const { body } = require('express-validator');

const dialogController = require('../controllers/dialog-controller');
const messageController = require('../controllers/message-controller');

const dialogService = require('../service/dialog-service');
const messageService = require('../service/message-service');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post('/cancelRegistration', userController.cancelRegistartion);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);

router.get('/users', authMiddleware, userController.getUsers);

router.get('/dialogs/:user');
router.get('/messages/:dialog');

router.ws('/ws', (ws, req) => {
  console.log('ПОДКЛЮЧЕНИЕ УСТАНОВЛЕНО');

  ws.on('message', (msg) => {
    const { event, data } = JSON.parse(msg);

    switch (event) {
      case 'send-message-to-dialog':
        messageService.create(data.dialog, data.text);
        break;
      case 'send-message-to-user':
        messageService.create(data.dialog, data.text);
        break;
    }
    console.log(`Message: ${msg}`);
  });
});

module.exports = router;
