const express = require("express");
const app = express();

app.listen(process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

// List of messages
// Each message has a user name and message text
let messages = [];

app.get("/messages", (req, res) => res.send(messages));

app.post("/message", (req, res) => {
  let message = { username: req.body.username, text: req.body.text };
  messages.push(message);
  res.send(messages);
});
