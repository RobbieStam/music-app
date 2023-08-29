import { useState } from 'react'
import './App.css'
import ArtistIntro from './ArtistIntro'
import ShowAlbums from './ShowAlbums'

function App() {
  return (
    <> 
    <div><ArtistIntro /></div>
    <div><ShowAlbums/></div>
    </>
  )
}

export default App
