// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PersonalDetails from './components/FormInput'
import { PracticalExperience } from './components/PracticalExperience'
import { Education } from './components/Education'

function App() {
  return (
    <>
      <PersonalDetails></PersonalDetails>
      <Education></Education>
      <PracticalExperience></PracticalExperience>
    </>
  )
}

export default App
