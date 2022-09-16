const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const express = require("express");

// Allows access to .env file
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  res.sendFile(path.resolve(__filename + "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
