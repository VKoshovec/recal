import { useState, useEffect } from "react";

const Pokemons = () => {



    const [pokemons, addPokemons = (pokemons, obj) => pokemons.push(obj)] = useState([]);



    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(res => res.json()).then( body => addPokemons(pokemons, body));
    },[])

    console.log(pokemons)

    return (
        <div>  
            
        </div>
    )
};

export default Pokemons;