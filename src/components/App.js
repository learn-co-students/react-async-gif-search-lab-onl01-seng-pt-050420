import React from 'react'
import GifListContainer from '../containers/GifListContainer'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 
// iwQR2RU1yzOcl2T99mmCFE6iOCZv7DbJ

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
