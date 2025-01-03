import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PersonalDetails, { EducationalExperience, PracticalExperience } from './components/FormInput'

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
