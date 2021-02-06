import React from 'react'
import { MediaQueries } from 'components/MediaQueries'
import './App.css'

function App() {
  const [size, setSize] = React.useState('xs')

  const handleSelect = (e) => setSize(e.target.value)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <select onChange={handleSelect}>
          <option value="xs">xs</option>
          <option value="md">md</option>
        </select>
        <MediaQueries size={size}>
          {(matches) => <h1>{matches ? '🎉' : '😥'}</h1>}
        </MediaQueries>
      </header>
    </div>
  )
}

export default App
