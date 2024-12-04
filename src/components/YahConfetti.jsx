import { useState } from "react";
import React from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
const YahConfetti = () => {
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(false)
  const handleClick = () => {
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
    }, 5000)
  }
    const yah = () => {
        return (
          <Confetti
            width={width}
            height={height}
          />
        )
      }
      const btn = <div>
      <button
        onClick={handleClick}>YAH!</button>
        {showConfetti && yah()}
        </div>
    return (btn)
}
export default YahConfetti;