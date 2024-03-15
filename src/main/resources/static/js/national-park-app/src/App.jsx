import { useState } from 'react'
import './App.css'
import Fetch from './assets/components/Fetch'
import LogInForm from './assets/components/LogInForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div>
        <Fetch/>
        <LogInForm/>
      </div>
    </>
  )
}

export default App
