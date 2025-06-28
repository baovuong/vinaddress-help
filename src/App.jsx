import { useState,  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AddresserInput from './components/AddresserInput'
import AddresserOutput from './components/AddresserOutput'

function App() {

  const [yourAgeRange, setYourAgeRange] = useState(0);
  const [theirAgeRange, setTheirAgeRange] = useState(0);
  const [yourGender, setYourGender] = useState('');
  const [theirGender, setTheirGender] = useState('');

  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vina Dresser</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      <div class="rowC">
        <div class="card">
            <AddresserOutput name={'You'} yourAgeRange={yourAgeRange} theirAgeRange={theirAgeRange} />
            <AddresserInput onAgeRangeChange={e => {
              setYourAgeRange(e.target.value);
              console.log(e.target.value);
            }} onGenderChange={e => {
              setYourGender(e.target.value);
            }} />
        </div>
        <div class="card">
            <AddresserOutput name={'They'} yourAgeRange={theirAgeRange} theirAgeRange={yourAgeRange} />
            <AddresserInput onAgeRangeChange={e => setTheirAgeRange(e.target.value)} onGenderChange={e => setTheirGender(e.target.value)}/>
        </div>
      </div>
    </>
  )
}

export default App
