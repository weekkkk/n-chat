const express = require('express');
const expressWs = require('express-ws');
const router = express.Router();
const wsInstance = expressWs(router);

const userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const { body } = require('express-validator');

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

router.get('/dialogs/:userId');
router.get('/messages/:dialogId');

router.ws('/ws', (ws, req) => {
  console.log('ПОДКЛЮЧЕНИЕ УСТАНОВЛЕНО');

  ws.on('message', (msg) => {
    const { event } = JSON.parse(msg);

    switch (event) {
      case 'create-dialog':
        break;
      case 'send-message':
        break;
    }
    console.log(`Message: ${msg}`);
  });
});

module.exports = router;
