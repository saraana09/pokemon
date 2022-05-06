const express = require("express")

const pokemons = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
];

const Pokemon = require("../schema/pokemonSchema")

const pokemon = express.Router()

pokemon.route('/')
.get((req, res) => {
   res.status(200).json(pokemons)
})
.post((req, res) => {
         res.status(200).json({pokemon: pokemons})
     })
//  create a brand new pokemon, and then return the added pokemon
pokemon.route('/create')
.post((req,res) => {
    const newPokemon = req.body
        
    Pokemon.create(newPokemon,(err, pokemon) => {
        if(err){
            res.status(400).json({message: err.message})
        } else {
            console.log("pokemon created successfully")
            res.status(201).json({newPokemon})
        }
    })
})
// Add A Seed Route to Pokemon that adds the entire original pokemon array
pokemon.route('/seed')
.get((req, res) => {
    Pokemon.insertMany(pokemons,(err, pokemons) => {
        if(err){
            res.status(400).json({message: err.message})
        } else {
            res.status(201).json(pokemons)
        }
    })

})


// Add a Clear Route to Remove Pokemon from database
// pokemon.route('/clear')
// .delete((req,res) => {
//     Pokemon.deleteMany((err) => {
//         if(err){
//             res.status(404).json({message: err.message})
//         } else {
//             res.status(204).json({message: "DELETED"})
//         }
// })

 pokemon.route('/:id')
 .get((req, res) => {
    res.status(200).json({id: req.params.id});
 })

 pokemon.route('/:name')
 .get((req, res) => {
    res.status(200).json({name: req.params.name});
 })

 module.exports = pokemon