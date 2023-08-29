
function ShowAlbums() {
  const albums = [
    {
      name: "Physics EP",
      songs: ["Open Arms", "Yours To Keep", "Midnight", "What Could Have Been"],
      release: "2016",
      cover: "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F1fd81bbc55a7df24f362837b04448b8b.700x700x1.jpg"
    }
  ]
  
  return (
    <>
      {albums.forEach((album) =>{
          <div className="album">
          {console.log(album.name)}
          <img src={album.cover}/>
          <h2>{album.name}</h2>
          <h3>Release Date:{album.release}</h3>
          <p>{album.songs}</p>
          </div>
        })
      }
    </>
  )}

export default ShowAlbums;
