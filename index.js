const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Radium API! You can view all commands on the /help route.");
});

app.get("/help", (req, res) => {
    res.send("Commands: /help, /versions");
});

app.get("/versions", (req, res) => {
    res.send("v1.0.5 v1.0.6");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

module.exports = app;