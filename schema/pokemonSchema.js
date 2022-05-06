const mongoose =require("mongoose")

const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    jpg: {type: String, required: true }
})

const pokemonModel = mongoose.model("Pokemon", pokemonSchema)

module.exports = pokemonModel