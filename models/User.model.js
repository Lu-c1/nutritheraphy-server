const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true 
    },
    password: String,
    image:String,
    mail: String,
    name: String,
    lastName: String,
    city: String,
    country: String,
    typeOfDiet: String
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
