import React, { useState, useEffect } from 'react';
import Player from './Components/Player/index';


function App() {

  const [songs, setSongs] = useState([
    {
      title: 'Música 1',
      artist: 'Clayton Rasta',
      img_src:'./images/song-1.jpg',
      src:'./music/on-n-on.mp3'
    },
    {
      title: 'Música 2',
      artist: 'Caneta Azul',
      img_src:'./images/song-1.jpg',
      src:'./music/on-n-on.mp3'

    },
    {
      title: 'Música 3',
      artist: 'Javascript Mental',
      img_src:'./images/song-1.jpg',
      src:'./music/on-n-on.mp3'
    },
    {
      title: 'Música 4',
      artist: 'Que isso é',
      img_src:'./images/song-1.jpg',
      src:'./music/on-n-on.mp3'
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  return (
    <div className="App">
      <h1>App</h1>
      <br></br>
      <h2>Components aqui</h2>
      <Player song={songs[currentSongIndex]} nextSongIndex={songs[nextSongIndex]}></Player>
    </div>
  );
}

export default App;
