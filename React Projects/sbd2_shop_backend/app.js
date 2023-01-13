var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var addressRouter = require("./routes/address");
var producerRouter = require("./routes/producer");
var categoryRouter = require("./routes/category");
var colorsRouter = require("./routes/colors");
var galeryRouter = require("./routes/galery");
var productRouter = require("./routes/product");
const passport = require("passport");
const User = require("./models/User");

require("./config/passport")(passport);

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/address", addressRouter);
app.use("/producer", producerRouter);
app.use("/category", categoryRouter);
app.use("/colors", colorsRouter);
app.use("/galery", galeryRouter);
app.use("/product", productRouter);

module.exports = app;
