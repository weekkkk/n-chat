const DialogModel = require('../models/dialog-model');

class DialogService {
  async create(members, isGroup = false) {
    const dialog = await DialogModel.create({ members, isGroup });
    return dialog;
  }

  async getDialogs(user) {
    let dialogs;
    if (user) {
      const membersIds = [user];
      dialogs = await DialogModel.findOne({
        members: {
          $in: membersIds,
        },
      });
    } else dialogs = await DialogModel.find();
    return dialogs;
  }
}

module.exports = new DialogService();
