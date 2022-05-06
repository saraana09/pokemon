const express = require("express");
const morgan =  require("morgan");
const bodyParser = require("body-parser")
const pokemon = require("./models/pokemon")

const mongoConfig = require("./config")

require("dotenv").config();

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.json())
server.use(bodyParser.json())
server.use(morgan("dev"))
server.use("/pokemon", pokemon)

server.get("/", (req, res)=>{
    res.status(200).json({message: "Welcome to the Pokemon App"})
})



server.listen(PORT, ()=>{
    mongoConfig()
    console.log(`Server is listening at ${PORT}`)
})