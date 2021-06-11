// imported mongoose
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mest", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err.message));
