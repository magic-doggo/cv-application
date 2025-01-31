// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import { PracticalExperience } from './components/PracticalExperience'
import { Education } from './components/Education'
import { CVPage } from './components/CVInfo'

function App() {
  return (
    <>
      {/* <PersonalDetails></PersonalDetails>
      <Education></Education>
      <PracticalExperience></PracticalExperience> */}
      <CVPage></CVPage>
    </>
  )
}

export default App
