// importing express
const express = require("express");
// importing cors
const cors = require("cors");
// importing routes
const userRoute = require("./routes/userRoute");
// connecting to database
require("./dbConfig/dbConnect");
// initializing express
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", userRoute);

app.listen(4000, () => {
  console.log("server is running at port 4000");
});
