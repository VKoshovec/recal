import { useState, useEffect } from "react";
import { pokemon, pokemonArr } from "../Api/api";

const Pokemons = () => {

    const [pokemons, addPokemons] = useState([]);

    useEffect(()=>{

      pokemonArr(40).then( 
        resp => { console.log(resp);
                  addPokemons(resp) }
      )
       
    },[])

    

    return (
        <div>  
           { pokemons.map((el)=>{
             return <p>{el.name}</p>
           }) } 
        </div>
    )
};

export default Pokemons;