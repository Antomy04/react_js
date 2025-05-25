import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)    //useState(HOOK) takes the default value and return the 2 size array
                                            // first is the variable and second is the function
  
  // let counter = 5;

  const addValue = () => {
    // counter += 1
    if(counter != 20){
      setCounter(counter + 1)
    }
    // console.log("value added", Math.random());
  }

  const removeValue = () => {
    if(counter != 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br />

     <button
     onClick={removeValue}
     >Decrease Value {counter}</button>

     <p>footer: {counter}</p>
    </>
  )
}

export default App
