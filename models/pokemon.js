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
    
 pokemon.route('/:id')
 .get((req, res) => {
    res.status(200).json({id: req.params.id});
 })

 pokemon.route('/:name')
 .get((req, res) => {
    res.status(200).json({name: req.params.name});
 })

 module.exports = pokemon