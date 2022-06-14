import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:2137");

function App() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [nick, setNick] = useState("");
  const [message, setMessage] = useState("");

  const sendNickname = () => {
    if (nick) {
      socket.emit("nickname", nick);
      setLoggedIn(true);
      socket.emit("getUsersAndMessages", "");
    }
  };

  const sendMessage = () => {
    let object = {
      message: message,
      nick: nick,
    };
    socket.emit("sendMessage", object);
    messages.push(object);
    setMessages(messages);
    setMessage("");
  };

  useEffect(() => {
    socket.on("usersAndMessages", (object) => {
      setUsers(object.users);
      setMessages(object.messages);
    });
  }, []);

  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <div>
            {users && users.length > 0 && users.map((user) => <p>{user}</p>)}
          </div>
          <div>
            {messages &&
              messages.length > 0 &&
              messages.map((message) => (
                <p>
                  <b>{message.nick}</b>: {message.message}
                </p>
              ))}
          </div>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          ></input>
          <button onClick={sendMessage}>Send</button>
        </div>
      ) : (
        <div>
          <input
            placeholder="enter nickname"
            onChange={(e) => setNick(e.target.value)}
          ></input>
          <button onClick={sendNickname}>Connect</button>
        </div>
      )}
    </div>
  );
}

export default App;
