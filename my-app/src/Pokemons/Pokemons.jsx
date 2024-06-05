import { useState, useEffect } from "react";
import { pokemonArr } from "../Api/api";
import { ColorRing } from 'react-loader-spinner';


const Pokemons = () => {

    const [pokemons, addPokemons] = useState([]);
    const [loader, setLoder] = useState(true);

    useEffect(()=>{

      pokemonArr(1000).then( 
        resp => {addPokemons(resp); setLoder(false)})
       
    },[])  

    return (
        <>  {(loader === true) ? <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            /> : 
            <div>
            <ul>  
               { pokemons.map(({name}, number) =>{ return <li id={number} key={number}>{name}</li> })} 
            </ul>
            </div>}
        </>
    )
};

export default Pokemons;