const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MsgModel = mongoose.model(
  "Msg",
  new Schema({
    name: String,
    message: String,
    address: String,
    updated: { type: Date, default: Date.now() },
  })
);

module.exports = MsgModel;