import { useState } from 'react'
import './App.css'
import { ArtistIntro, ShowAlbums } from './components'

function App() {
  return (
    <> 
    <div className="intro"><ArtistIntro /></div>
    <div><ShowAlbums /></div>
    </>
  )
}

export default App
