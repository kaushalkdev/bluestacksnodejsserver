const express = require("express");
const app = express();
const importData = require("./user.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/user", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(importData));
});


app.listen(port, () => {
    console.log(`example app running on port http://localhost:${port}`);
});