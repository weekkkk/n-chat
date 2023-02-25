const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const MailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
class UserService {
  async registation(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с email ${email} уже сущестует`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = await uuid.v4();
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    await MailService.sendActivationLink(email, activationLink);

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new UserService();
