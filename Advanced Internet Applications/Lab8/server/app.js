var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

let users = [];
let messages = [];

const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("nickname", (nick) => {
    users.push(nick);
    messages.push({
      nick: nick,
      message: `${nick} has joined the chat`,
    });
    socket.broadcast.emit("usersAndMessages", {
      users: users,
      messages: messages,
    });
    console.log(users);
  });

  socket.on("sendMessage", (object) => {
    messages.push({
      nick: object.nick,
      message: object.message,
    });
    socket.broadcast.emit("usersAndMessages", {
      users: users,
      messages: messages,
    });
  });

  socket.on("getUsersAndMessages", () => {
    console.log(users);
    socket.emit("usersAndMessages", { users: users, messages: messages });
  });

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

http.listen(2137, () => {
  console.log("Listening on localhost:2137");
});

module.exports = app;
