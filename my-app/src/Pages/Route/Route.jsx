import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(()=> import('../Home/Home'));
const Pokemons = lazy(()=> import('../Pokemons/PokemonsPage'));

const Routepages = () => {

return (
    <Suspense fallback = 'Loading...'>
     <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/about" element={<Pokemons/>} />
     </Routes>
    </Suspense>
    );
};

export default Routepages;