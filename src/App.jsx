import React from 'react'
import './App.css';
import axios from 'axios';
import randomUserAPI from './api/randomUserAPI';

const {useEffect, useState} = React;



const App = () => {
  let [counter, setCounter] = useState(0);

  let [randomUserJSON, setRandomUserJSON] = useState('');

  // useEffect(() => {
  //   randomUserAPI()
  //     .then(() => {
  //       setRandomUserJSON(randomUserJSON)
  //     })
  //     .catch(err => {
  //     console.error(err)
  //     })
  // }, []);

  return (
    <div className="App">
        <h1>Fetch API Playground</h1>
          <hr />

          
        <div>
          {/* Counter */}
          <h3>Counter</h3>
          <p>{counter}</p>

          {/* increment button */}
          <button onClick={() => {
            setCounter(counter + 1)
          }}>add</button>

          {/* decrement button */}
          <button onClick={() => {
            setCounter(counter - 1)
          }}>substract</button>

          {/* RESET button */}
          <button onClick={() => {
            setCounter(counter = 0);
          }}>reset</button>

          {/* multiply by 2 button */}
          <button onClick={() => {
            setCounter(counter * 2);
          }}>X 2</button>

        </div>


      <hr />


          {/* Fetch random user API */}
      <div>
          <button onClick={() => {
            randomUserAPI().then(() => {
              setRandomUserJSON(randomUserJSON)
              })
            .catch(err => {
              console.error(err)
            })
          }}>Fetch Random User Data</button>
          <p>{randomUserJSON}</p>
      </div> 


    </div>
  )
}

export default App
