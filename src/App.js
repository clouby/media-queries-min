import React from 'react'
import { MediaQuery, useMediaQuery } from 'components/MediaQuery'
import './App.css'

function App() {
  const [size, setSize] = React.useState('xs')
  const { matches } = useMediaQuery('lg')

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
        <h3>Child Function</h3>
        <MediaQuery size={size}>
          {(matches) => <h1>{matches ? '🎉' : '😥'}</h1>}
        </MediaQuery>
        <h3>Hooks</h3>
        <h1>{matches ? '🎉' : '😥'}</h1>
      </header>
    </div>
  )
}

export default App
