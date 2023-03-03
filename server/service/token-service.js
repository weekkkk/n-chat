const jwt = require('jsonwebtoken');

const TokenModel = require('../models/token-model');

class TokenService {
  /**
   * * Генерация токенов
   * @param payload
   */
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30s',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  /**
   * * Валидация access токена
   * @param token - значение токена
   * @returns
   */
  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }
  /**
   * * Валидация refresh токена
   * @param token - значение токена
   * @returns
   */
  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }
  /**
   * * Сохранить токен
   * @param user - id пользователя
   * @param refreshToken - refresh токен
   */
  async saveToken(user, refreshToken) {
    const tokenData = await TokenModel.findOne({ user });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenModel.create({ user, refreshToken });
    return token;
  }
  /**
   * * Удалить токен
   * @param refreshToken - токен, который нужно удалить
   */
  async removeToken(refreshToken) {
    const tokenData = await TokenModel.deleteOne({ refreshToken });
    return tokenData;
  }
  /**
   * * Найти токен
   * @param refreshToken - токен, который нужно найти
   */
  async findToken(refreshToken) {
    const tokenData = await TokenModel.findOne({ refreshToken });
    return tokenData;
  }
  /**
   * * Удалить токен по id пользователя
   * @param user - id пользователя
   */
  async deleteUserToken(user) {
    const tokenData = await TokenModel.deleteOne({ user });
    return tokenData;
  }
}

module.exports = new TokenService();
