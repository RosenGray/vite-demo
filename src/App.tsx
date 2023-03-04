import { useState } from 'react'

import './App.css'
import { decrement, increment } from './features/counter/slice'
import { useAppDispatch, useAppSelector } from './store/hook'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      {count}
      <button onClick={() => {
        dispatch(increment());
      }}>+</button>
      <button onClick={() => {
        dispatch(decrement());
      }}>-</button>
    </div>

  )
}

export default App
