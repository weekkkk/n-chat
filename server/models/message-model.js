const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  text: { type: String, required: true },
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  dialog: {
    type: Schema.Types.ObjectId,
    ref: 'Dialog',
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model('Message', MessageSchema);
