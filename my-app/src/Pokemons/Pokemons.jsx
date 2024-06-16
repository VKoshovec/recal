import { useState, useEffect } from "react";
import { pokemonArr } from "../Api/api";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { beginSync, finishSync, fetchPokemons, store } from "../redux/redux";

const Pokemons = () => {

    const dispatch = useDispatch();

    // const [pokemons, addPokemons] = useState([]);
    // const [loader, setLoder] = useState(true);
    const pokemons = useSelector(store => store.pokemons);

    useEffect(()=>{
    //   dispatch(beginSync());
    //   pokemonArr(1000).then( 
    //     resp => {addPokemons(resp); dispatch(finishSync())})
    dispatch(fetchPokemons())     
    },[dispatch])  

    return (
        <>
          <Loader/>
          <div>
            <ul>  
               { pokemons.map(({name}, number) =>{ return <li id={number} key={number}>{name}</li> })} 
            </ul>
          </div>
        </>
    )
};

export default Pokemons;