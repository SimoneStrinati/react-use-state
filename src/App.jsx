import { useState } from 'react'
import languages from "./data/languages.js"


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>

      <div className='container'>
        <h1>Learn Web Development</h1>

        <div className='btnContainer'>
          
          {languages.map((language, i) => {
            return <button key={i} className= {i === selectedIndex ? "activeBtn" : "noActiveBtn"}  onClick={() => setSelectedIndex(i)}>{language.title}</button>
          }
          )}
          
        </div>

        <div className='card'>
          <h2>{languages[selectedIndex].title}</h2>
          <p>{languages[selectedIndex].description}</p>
        </div>

      </div>

    </>
  )
}

export default App
