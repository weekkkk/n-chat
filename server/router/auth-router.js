const express = require('express');
// const expressWs = require('express-ws');
const router = express.Router();
// const wsInstance = expressWs(router);

const userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const { body } = require('express-validator');

// const dialogController = require('../controllers/dialog-controller');
// const messageController = require('../controllers/message-controller');

// const dialogService = require('../service/dialog-service');
// const messageService = require('../service/message-service');

/**
 * * Регистрация
 */
router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration
);
/**
 * * Отмена регистрации
 */
router.post('/cancelRegistration', userController.cancelRegistartion);
/**
 * * Авторизация
 */
router.post('/login',userController.login);
/**
 * * Выход
 */
router.post('/logout',userController.logout);
/**
 * * Активация пользователя по ссылке
 */
router.get('/activate/:link',userController.activate);
/**
 * * Обновление токенов
 */
router.get('/refresh',userController.refresh);
/**
 * * Получить пользователей
 */
router.get('/users',authMiddleware,userController.getUsers);


// router.post('/createDialog', authMiddleware, dialogController.create);
// router.get('/dialogs/:user', authMiddleware, dialogController.getUserDialogs);
// router.get('/createMessage', authMiddleware, messageController.send);
// router.get('/messages/:dialog', authMiddleware, messageController.getDialogMessages);

// router.ws('/ws', (ws, req) => {
//   console.log('ПОДКЛЮЧЕНИЕ УСТАНОВЛЕНО');

//   ws.on('message', (msg) => {
//     console.log(msg);
//     const { event, data } = JSON.parse(msg);

//     switch (event) {
//       case 'create-dialog':
//         console.log('create-dialog', data);
//         // messageService.create(data.dialog, data.text);
//         break;
//       case 'send-message':
//         console.log('send-message', data);
//         console.log(router);
//         // messageService.create(data.dialog, data.text);
//         break;
//     }
//     console.log(`Message: ${msg}`);
//   });
// });

module.exports = router;
