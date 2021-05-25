
const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
let users = []

app.post('/users', (req, res) =>{
    let username = req.body;
    users.push(username);
    res.send(users);
    console.log(users)
})

