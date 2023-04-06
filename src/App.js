/* eslint-disable no-const-assign */
import './App.css';
import Navbar from './components/Navbar';




import React from 'react'
import News from './components/News';

function App() {
  return (
    <div className ="my-4 mx-3">
      <Navbar />
      <News/>
    </div>
  )
}

export default App
