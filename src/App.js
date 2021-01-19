import React, { useState, useEffect } from 'react';
import Player from './Components/Player/index';


function App() {

  const [songs] = useState([
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
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex +1 > songs.length -1){
        return 0;
      }else{
       return  currentSongIndex + 1;
      }
    })
  },[currentSongIndex]);

  return (
    <div className="App">
     
      <Player 
      
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
      
      ></Player>
    </div>
  );
}

export default App;
