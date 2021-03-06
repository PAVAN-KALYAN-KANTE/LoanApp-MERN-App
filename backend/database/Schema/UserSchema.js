const mongoose = require("../common/connection");
const schema = mongoose.Schema;
var UserSchema = new schema({
  email: String,
  password: String,
  role: String,
  vallet: { type: Number, default: 0 },
  loans: [
    {
      loanid: String,
      amount: Number,
      status: String,
      description: String,
    },
  ],
});

var userModel = mongoose.model("users", UserSchema);
module.exports = userModel;
