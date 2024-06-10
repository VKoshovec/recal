//import logo from './logo.svg';
import './App.css';
import MyComponenet from './MyComponenet/MyComponenet';
import { useState } from 'react';
import Pokemons from './Pokemons/Pokemons';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import Routepages from './Pages/Route/Route';



const App = () =>  {

  const [show, setShow ] = useState(false);

  return (
    <>
      <Layout/>
      <Routepages/>
    </>
  );
}

export default App;
