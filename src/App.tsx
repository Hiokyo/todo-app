import './App.css'

import TodoList from './components/UI/organisms/list/TodoList'
import ChangeLanguage from './components/UI/molecules/multi-language/ChangeLanguage'

function App() { 
  return (
   <>
      <ChangeLanguage></ChangeLanguage>
      <TodoList></TodoList>
   </>
  )
}

export default App
