const MessageModel = require('../models/message-model');

class MessageService {
  async create(dialog, text) {
    const message = await DialogModel.create({ dialog, text });
    return message;
  }

  async getMessages(dialog) {
    let messages;
    if (dialog) messages = await MessageModel.findOne({ dialog });
    else messages = await MessageModel.find();
    return messages;
  }
}

module.exports = new MessageService();
