import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addresser from './components/AddresserOutput'
import AddresserInput from './components/AddresserInput'
import AddresserOutput from './components/AddresserOutput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vina Dresser</h1>
      <div className="card">
        <div>
            Gender?
        </div>
        <div>

        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div class="rowC">
        <div class="card">
            <AddresserOutput name={'You'} />
            <AddresserInput />
        </div>
        <div class="card">
            <AddresserOutput name={'They'} />
            <AddresserInput />
        </div>
      </div>
    </>
  )
}

export default App
