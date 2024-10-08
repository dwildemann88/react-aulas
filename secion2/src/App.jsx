import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import City from './assets/img2.jpg'
import ManageData from './components/ManageData'
import { ListRender } from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        {/* imagem em assests */}
        <div className="img">
          <img src={City} alt="cidade" />
        </div>
        <div>
          <ManageData/>
          <ListRender/>
        </div>
      </div>
    </>
  )
}

export default App
