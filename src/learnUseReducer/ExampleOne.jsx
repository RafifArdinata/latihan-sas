import React, { useState } from 'react'

function ExampleOne() {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Tambah 1</button>
      <br />
      <button onClick={() => setNumber(number - 1)}>Kurang 1</button>
      <br />
      <button onClick={() => setNumber(number + 5)}>Tambah 5</button>
      <br />
      <button onClick={() => setNumber(number - 5)}>Kurang 5</button>
      <br />
      <button onClick={() => setNumber(0)}>Reset</button>
    </div>
  )
}

export default ExampleOne