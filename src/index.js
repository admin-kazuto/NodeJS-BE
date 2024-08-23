// import { engine } from "express-handlebars";
const path = require("path")
const { engine } = require("express-handlebars");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined")); // dùng để check request

app.engine("handlebars", engine()); //templace engine
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'resources/views'))

app.enable('view cache') //kiểm soát cache

// console.log("PATH", path.join(__dirname,''))
app.get("/", (req, res) => res.render('home'));
app.listen(port, () => console.log(`http://localhost:${port}`));

