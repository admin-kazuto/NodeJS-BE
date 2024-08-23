const express = require("express");
const morgan = require("morgan")
const app = express();
const port = 3000;

app.use(morgan('combined')) // dùng để check request
app.get("/", function (req,res) {
  return res.send("hello world");
});
app.listen(port, () => console.log(`http://localhost:${port}`));
