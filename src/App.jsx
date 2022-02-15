import React from 'react'
import './App.css';
import axios from 'axios';
import randomUserAPI from './api/randomUserAPI';

const {useState} = React;



const App = () => {
  const [counter, setCounter] = useState(0);
  const [count, resetCounter] = useState(0);

  return (
    <div className="App">
        <h1>Fetch API Playground</h1>
          <hr />

          
        <div>
          {/* Counter */}
          <h3>Counter</h3>
          <p>{counter}</p>
          <button onClick={() => {
            setCounter(counter + 1)
          }}>Increase Counter</button>
          <button onClick={() => {
            setCounter(count - 0)
          }}>Reset Counter</button>
        </div>


      <hr />


          {/* Fetch random user API */}
      <div>
          <button onClick={() => {
            randomUserAPI()
          }}>Fetch Random User Data</button>
      </div> 


    </div>
  )
}

export default App
