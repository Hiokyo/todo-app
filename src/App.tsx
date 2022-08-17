import { useState } from 'react'
import './App.css'


import { StoreContext } from './store'
import { useContext } from 'react'
import TodoList from './components/UI/organisms/list/TodoList'
import ChangeLanguage from './components/UI/molecules/multi-language/ChangeLanguage'

function App() {
  const {state, dispatch} = useContext(StoreContext)
  console.log(state);
  
  return (
   <>
      <ChangeLanguage></ChangeLanguage>
      <TodoList></TodoList>
   </>
  )
}

export default App
