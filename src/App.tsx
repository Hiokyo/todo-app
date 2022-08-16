import { useState } from 'react'
import './App.css'

import { StoreContext } from './store'
import { useContext } from 'react'

function App() {
  const {state, dispatch} = useContext(StoreContext)
  console.log(state);
  
  return (
   <></>
  )
}

export default App
