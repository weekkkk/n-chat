const express = require('express');
const expressWs = require('express-ws');
const router = express.Router();
const wsInstance = expressWs(router);

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
router.post('/login', userController.login);
/**
 * * Выход
 */
router.post('/logout', userController.logout);
/**
 * * Активация пользователя по ссылке
 */
router.get('/activate/:link', userController.activate);
/**
 * * Обновление токенов
 */
router.get('/refresh', userController.refresh);
/**
 * * Получить пользователей
 */
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;
