import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='container'>
        <h1>Learn Web Development</h1>

        <div className='btnContainer'>
          <button className='activeBtn'>HTML</button>

        </div>

        <div className='card'>
          <h2>titolo</h2>
          <p>contenuto</p>

        </div>

      </div>

    </>
  )
}

export default App
