const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
const userModel = require('../models/user-model');

class UserService {
  async registation(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с email ${email} уже сущестует`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = await uuid.v4();
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    await mailService.sendActivationLink(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async cancelRegistartion(userId) {
    const user = await UserModel.findById(userId);
    if (!user) {
      throw ApiError.BadRequest(`Пользователь с id ${userId} не найден`);
    }
    if (user.isActivated) {
      throw ApiError.BadRequest(
        `Пользователь с id ${userId} уже активировал аккаун`
      );
    }
    const userData = await UserModel.findByIdAndDelete(userId);
    const tokenData = await tokenService.deleteUserToken(userId);
    return { userData, tokenData };
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest('Неккоректная ссылка активации');
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким email не найден');
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Неверный пароль');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }

    const user = await userModel.findById(userData.id);

    if (!user) {
      throw ApiError.UnauthorizedError();
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async getAllUsers() {
    const users = await userModel.find();
    return users;
  }
}

module.exports = new UserService();
