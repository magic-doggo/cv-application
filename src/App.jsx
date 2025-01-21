import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PersonalDetails, { EducationalExperience} from './components/FormInput'
import { PracticalExperience } from './components/PracticalExperience'

function App() {
  return (
    <>
      <PersonalDetails></PersonalDetails>
      <EducationalExperience></EducationalExperience>
      <PracticalExperience></PracticalExperience>
    </>
  )
}

export default App
