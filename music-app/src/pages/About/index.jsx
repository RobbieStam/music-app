import React from 'react'
import { useNavigate } from 'react-router-dom'
import { default as ArtistIntro } from '../../components/ArtistIntro'

const About = () => {
  const navigate = useNavigate()
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
