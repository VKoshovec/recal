import axios from 'axios';

const pokemon = async() => {
    
    try {

    const responce = (await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")).data;
    return responce;

    } catch (error) {
    return error;
}};

const pokemonArr = async(limit) => {
    
    try {

    const responce = (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)).data.results;
    return responce;

    } catch (error) {
    return error;    
}};

export { pokemon, pokemonArr };