import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import YahConfetti from './components/YahConfetti'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="moto">
        <h1>Concentration and purposefulness are the heroism of our time</h1>
        </div>
        {/* <Header /> */}
        <TodoInput />
        {/* <YahConfetti /> */}
    </>
  )
}

export default App
