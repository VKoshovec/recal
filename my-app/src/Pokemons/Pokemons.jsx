import { useEffect } from "react";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../redux/redux";
import { selectPokemons, selectError } from "../redux/selectors";
import Error from "../Error/Error";

const Pokemons = () => {

    const dispatch = useDispatch();

    // const [pokemons, addPokemons] = useState([]);
    // const [loader, setLoder] = useState(true);
    const pokemons = useSelector(selectPokemons);
    const errors = useSelector(selectError);

    useEffect(()=>{
    //   dispatch(beginSync());
    //   pokemonArr(1000).then( 
    //     resp => {addPokemons(resp); dispatch(finishSync())})
    dispatch(fetchPokemons())     
    },[dispatch])  

    return (
        <>
          <Loader/>
          <Error/>
          <div>
            <ul>  
               { pokemons.map(({name}, number) =>{ return <li id={number} key={number}>{name}</li> })} 
            </ul>
          </div>  
        </>
    )
};

export default Pokemons;