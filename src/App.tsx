import './App.css'

import AddTodo from './components/UI/molecules/add-todo/addTodo'
import TodoList from './components/UI/organisms/list/TodoList'
import ChangeLanguage from './components/UI/molecules/multi-language/ChangeLanguage'


function App() { 
  return (
   <>
      <ChangeLanguage/>
      <AddTodo/>
      <TodoList/>
   </>
  )
}

export default App
