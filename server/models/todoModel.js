const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    todo: {
      type: String,
      required: [true, "Please provide the todo text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todos", todoSchema);
