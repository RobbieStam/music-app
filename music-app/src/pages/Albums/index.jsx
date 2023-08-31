import React from 'react'
import { useNavigate } from 'react-router-dom'
import { default as ShowAlbums } from '../../components/ShowAlbums'
import './style.css'

const Albums = () => {
  const navigate = useNavigate()

  return (
    <>
    <button
        onClick={() => navigate(-1)}
      >Go back</button>
    <ShowAlbums />
    </>
    
  )
}

export default Albums
