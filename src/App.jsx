import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PersonalDetails from './components/FormInput'
import { EducationalExperience } from './components/FormInput'

function App() {
  return (
    <>
      <PersonalDetails></PersonalDetails>
      <EducationalExperience></EducationalExperience>
    </>
  )
}

export default App
