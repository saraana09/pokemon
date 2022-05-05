const express = require("express");
const morgan =  require("morgan");

require("dotenv").config();

const server = express();
const PORT = process.env.PORT || 3000;

server.get("/", (req, res)=>{
    res.status(200).json({message: "Welcome to the Pokemon App"})
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})