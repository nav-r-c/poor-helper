const express = require("express");
app = express();

app.get("/", (req, res) => {
    res.json({"message" : "Welcome to the api"})
})

app.listen(5000);
console.log("Server is listening on port 5000...")