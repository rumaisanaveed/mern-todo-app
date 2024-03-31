const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide the first name."],
    },
    lastname: {
      type: String,
      required: [true, "Please provide the last name."],
    },
    email: {
      type: String,
      required: [true, "Please provide the email."],
      unique: [true, "Email address already taken."],
    },
    password: {
      type: String,
      required: [true, "Please provide the password."],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
