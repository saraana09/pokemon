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

const pokemon = express.Router()

pokemon.route('/')
 .get((req, res) => {
    res.status(200).json(pokemons)
 })

 pokemon.route('/:id')
 .get((req, res) => {
    res.status(200).json({id: req.params.id});
 })

 module.exports = pokemon