//Mongoose settings

const mongoose = require("mongoose");
const uri = process.env.DB_URI;
mongoose.Promise = Promise;
mongoose.connect(uri, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});