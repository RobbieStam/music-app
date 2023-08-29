const artist = { name: "Jordan Mackampa", genre: "Singer/Songwriter", intro:"In 2016, Mackampa self-released his EP, Physics. He released another EP, Tales from the Broken, in 2017. He toured with Rhiannon Giddens, Lewis Watson, Blanco White, Giant Rooks, X Ambassadors, Jeremy Loops and Amber Run . His song 'Battlecry' was used as the opening theme for the British TV drama Our Girl in its third and fourth seasons, from 2017 to 2020. The song was also used in the 2019 worldwide 'Use Your Voice' advertising campaign for Levi's and for the 2020 television advert for Intel."}


function ArtistIntro(){
return (
  <>
  <h1>{artist.name}</h1>
  <h2>Genre: {artist.genre}</h2>
  <h3>About:</h3>
  <p>{artist.intro}</p>
  </>
)
}

export default ArtistIntro;
