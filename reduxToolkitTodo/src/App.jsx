import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>learn abut redux</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
