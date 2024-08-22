const express = require("express");
const app = express();
const port = 3000;
app.get("/", function (req,res) {
  return res.send("hello world");
});
app.listen(port, () => console.log(`http://localhost:${port}`));
