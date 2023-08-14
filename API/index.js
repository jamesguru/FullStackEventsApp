const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const eventsRoute=require("./routes/Events");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;
const DB = process.env.DB;

app.use('/api/events',eventsRoute)

mongoose.connect(DB)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


