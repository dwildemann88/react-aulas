import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import FirstComponent from "./components/FirstComponent"
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*algum comentario*/}
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <p className='texto'>Meu texto</p>
      <TemplateExpressions/>
      <Events/>
      
    </>
  );
};


export default App;
