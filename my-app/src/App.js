//import logo from './logo.svg';
import './App.css';
import MyComponenet from './MyComponenet/MyComponenet';
import { useState } from 'react';



const App = () =>  {

  const [show, setShow ] = useState(false);

  return (<>
    <h1>Hello world!!!</h1>
    { show && <MyComponenet/>}
    <button 
    type='button'
    onClick={ () => setShow(!show) }>
    Show me!!!
    </button>
    </>
  );
}

export default App;
