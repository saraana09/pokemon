const express = require("express");
const morgan =  require("morgan");
const pokemon = require("./models/pokemon")

require("dotenv").config();

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.json())
server.use("/pokemon", pokemon)

server.get("/", (req, res)=>{
    res.status(200).json({message: "Welcome to the Pokemon App"})
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})