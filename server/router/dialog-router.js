const express = require('express');
const router = express.Router();

const dialogController = require('../controllers/dialog-controller');

/**
 * * Создать диалог
 */
router.post('/create', dialogController.create);
/**
 * * Получить диалоги
 */
router.get('/dialogs', dialogController.getDialogs);

module.exports = router;
