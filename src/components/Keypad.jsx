import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/db.json')
      .then(res => res.json())
      .then(({qwerty}) => {
        setLetters(qwerty)
      })
  }, [])

  return (
    <div className="keypad">
      {letters && letters.map((l) => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={(l.key.toUpperCase() === 'DEL' || l.key.toUpperCase() === 'ENTER' ? "wide" : color)}>{l.key.toUpperCase()}</div>
        )
      })}
    </div>
  )
}
