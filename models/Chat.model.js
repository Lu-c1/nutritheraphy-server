const { Schema, model } = require("mongoose");
require("./User.model");

// ! Chat has only the participants as an array. 

let chatSchema = new Schema(
  {
    participants: [
      {
        ref: "User",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

let Chat = model("Chat", chatSchema);

module.exports = Chat;