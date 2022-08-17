import { useState } from 'react'
import './App.css'

import { StoreContext } from './store'
import { useContext } from 'react'
import TodoList from './components/UI/organisms/list/TodoList'

function App() {
  const {state, dispatch} = useContext(StoreContext)
  console.log(state);
  
  return (
   <>
      <TodoList></TodoList>
   </>
  )
}

export default App
