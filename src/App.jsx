import { useState,  } from 'react'
import './App.css'

import AddresserInput from './components/AddresserInput'
import AddresserOutput from './components/AddresserOutput'

function App() {


  const ageRanges = [
    { name: 'Infant (0-1)',             value: 0 },
    { name: 'Toddler (2-4)',            value: 1 },
    { name: 'Child (5-12)',             value: 2 },
    { name: 'Teen (13-19)',             value: 3 },

    { name: 'Adult (20-39)',            value: 4 },
    { name: 'Middle Age Adult (40-59)', value: 5 },
    
    { name: 'Senior Adult (60+)',       value: 8 }
  ];

  const genders = [
    'Male',
    'Female',
    'Non-Binary'
  ];

  const [yourAgeRange, setYourAgeRange] = useState(0);
  const [theirAgeRange, setTheirAgeRange] = useState(0);
  const [yourGender, setYourGender] = useState('m');
  const [theirGender, setTheirGender] = useState('m');

  return (
    <>
      <h1>Vina Dresser</h1>

      <div class="rowC">
        <div class="card">
            <AddresserOutput 
              name={'You'} 
              yourAgeRange={yourAgeRange} 
              theirAgeRange={theirAgeRange}
              gender={yourGender} />
            <AddresserInput 
              ageRanges={ageRanges}
              genders={genders}
              onAgeRangeChange={e => setYourAgeRange(e.target.value)} 
              onGenderChange={e => setYourGender(e.target.value)} />
        </div>
        <div class="card">
            <AddresserOutput 
              name={'They'} 
              yourAgeRange={theirAgeRange} 
              theirAgeRange={yourAgeRange}
              gender={theirGender} />
            <AddresserInput 
              ageRanges={ageRanges}
              genders={genders}
              onAgeRangeChange={e => setTheirAgeRange(e.target.value)} 
              onGenderChange={e => setTheirGender(e.target.value)} />
        </div>
      </div>
    </>
  )
}

export default App
