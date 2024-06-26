const express = require("express");
const users = require('./db.json');
const app = express();

app.get('/api/users',(req,res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {

    res.json(users.find(user => user.id === Number(req.params.id)));
 
 });

const port = process.env.PORT || 3200;

app.get("/satang", (req, res) => { res.send("Hello! My name is Peerakan");}); 
app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:" +port);
    console.log("Starting node.js at http://127.0.0.1:" +port +"/api/users");
});