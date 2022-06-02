import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h2>You Win!</h2>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} {turn > 1 ? 'guesses' : 'guess'}</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h2>Nevermind!</h2>
          <p className="solution">{solution}</p>
          <p>Better luck next time</p>
        </div>
      )}
    </div>
  )
}



