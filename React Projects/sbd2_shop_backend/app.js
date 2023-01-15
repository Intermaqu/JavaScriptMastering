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
var deliveryRouter = require("./routes/delivery");
var paymentRouter = require("./routes/payment");
var transactionsRouter = require("./routes/transactions");
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
app.use(
  "/address",
  passport.authenticate("jwt", { session: false }),
  addressRouter
);
app.use(
  "/producer",
  passport.authenticate("jwt", { session: false }),
  producerRouter
);
app.use(
  "/delivery",
  passport.authenticate("jwt", { session: false }),
  deliveryRouter
);
app.use(
  "/payment",
  passport.authenticate("jwt", { session: false }),
  paymentRouter
);
app.use(
  "/category",
  passport.authenticate("jwt", { session: false }),
  categoryRouter
);
app.use(
  "/colors",
  passport.authenticate("jwt", { session: false }),
  colorsRouter
);
app.use(
  "/galery",
  passport.authenticate("jwt", { session: false }),
  galeryRouter
);
app.use(
  "/product",
  passport.authenticate("jwt", { session: false }),
  productRouter
);
app.use(
  "/transactions",
  passport.authenticate("jwt", { session: false }),
  transactionsRouter
);

module.exports = app;
