const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

app = express();

const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Atlas Connected.")
})

app.get("/", (req, res) => {
    res.json({"message" : "Welcome to the api"})
})

const userRouter = require("./routes/user");
const jobRouter = require("./routes/jobs")
const charityRouter = require("./routes/charity");

app.use("/users", userRouter);
app.use("/jobs", jobRouter);
app.use("/charity", charityRouter)

app.listen(port);
console.log(`Server is listening on port ${port}...`)