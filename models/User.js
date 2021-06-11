const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please this field can not be empty"],
  },
  lastName: {
    type: String,
    required: [true, "Please this field can not be empty"],
  },
  email: {
    type: String,
    required: [true, "Please this field can not be empty"],
  },
  password: {
    type: String,
    required: [true, "Please this field can not be empty"],
  },
});

module.exports = model("User", userSchema);
