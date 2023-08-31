import React from 'react'
import { default as ArtistIntro } from '../../components/ArtistIntro'

const About = () => {
  return (
    <>
    <button
        onClick={() => navigate(-1)}
      >Go back</button>
    <div className="intro">
    <ArtistIntro /> 
    </div>
    </>
  )
}

export default About
