import React, { useState } from "react";

const albums = [
  {
    name: "Physics EP",
    songs: ["Open Arms", "Yours To Keep", "Midnight", "What Could Have Been"],
    release: 2016,
    cover: "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F1fd81bbc55a7df24f362837b04448b8b.700x700x1.jpg"
  },
  {
    name: "Tales From the Broken",
    songs: ["Battlecry", "Saint", "Salt", "Teardrops In A Hurricane"],
    release: 2017,
    cover: "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F174fe935048ea480de038a96ce01abe1.1000x1000x1.jpg"
  },
  {
    name: "Foreigner",
    songs: ["Magic", "Love at First Sight", "Tight", "What Am I", "Parachutes", "Interlude:Lula", "Foreigner", "Care for Your Mother", "Eventide", "Under", "Warning Signs"],
    release: 2020,
    cover: "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F85bb27b862d51e41aa2511c2888b19fd.939x939x1.jpg"
  },
  {
    name: "Come Around EP",
    songs: ["Alibi", "Over and Out", "Marks", "Peace By Peace"],
    release: 2021,
    cover: "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F7e8dcc8990fa273df0db41d64b32c462.496x496x1.jpg"
  }
]

function ListSongs(arr) {
  return (
    arr.map(i => {
      return (
        <>
        <li key={i}>{i}</li>
        </>
      )
    })

  )
}

function LikeButton() {
  const [like, setLike] = useState("Like")

  const handleLikedButton = () => {
    setLike(previous => "Unlike")
  }

  const handleUnlikedButton = () => {
    setLike(previous => "Like")
  }

  const handleButton = () => {
    if (like === "Like") {
      handleLikedButton()
    } else {
      handleUnlikedButton()
    }
  }

  return (
    <>
    <button id="like-btn"
      onClick={handleButton}
    >{like}</button>
    </>
  )
}

function ShowAlbums() {
  return (
    albums.map(album => {
      return(
        <>
        <div className="album" key={album.name}>
        <h2>{album.name}</h2>
        <img src={album.cover}/>
        <h3>Release Date: {album.release}</h3>
        <ul>Songs: {ListSongs(album.songs)}</ul>
        <span><LikeButton /></span>
        </div>
        </>
      )

    })
  )
}

export default ShowAlbums;
