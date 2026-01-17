import { useState } from 'react'
import languages from "./data/languages.js"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='container'>
        <h1>Learn Web Development</h1>

        <div className='btnContainer'>
          
          {languages.map((language, i) => {
            return <button className='activeBtn'>{language.title}</button>
          }
          )}


        </div>

        <div className='card'>
          <h2>{languages[0].title}</h2>
          <p>{languages[0].description}</p>

         

        </div>

      </div>

    </>
  )
}

export default App
