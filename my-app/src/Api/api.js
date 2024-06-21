import axios from 'axios';

const pokemon = async() => {
    
    try {

    const responce = (await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")).data;
    return responce;

    } catch (error) {
    return error;
}};

const pokemonArr = async(limit) => {

       const responce = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`);
       const data = await responce.data;
       const results = await data.results;

       return results };

export { pokemon, pokemonArr };