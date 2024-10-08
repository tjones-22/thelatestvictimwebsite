import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import Image from 'next/image';

const AudioPlayer = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(null); // Initialize as null to indicate loading
  const progressBarRef = useRef(null);
  const intervalRef = useRef(null); 

  useEffect(() => {
    const newSound = new Howl({
      src: ['/audio/Bleeding_Eyes_Short.wav'],
      volume: 1.0,
      onload: () => {
        setDuration(newSound.duration());
      },
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onend: () => {
        console.log("Audio ended");
        setIsPlaying(false);
        setCurrentTime(0);
        clearInterval(intervalRef.current); 
      },
      onloaderror: (id, error) => {
        console.error(`Failed to load sound: ${error}`);
      },
      onplayerror: (id, error) => {
        console.error(`Failed to play sound: ${error}`);
      }
    });
    setSound(newSound);

    return () => {
      if (newSound) {
        newSound.unload();
      }
      clearInterval(intervalRef.current); 
    };
  }, []);

  const playAudio = () => {
    if (sound) {
      sound.mute(false);
      sound.play();
      console.log("Playing");
      intervalRef.current = setInterval(updateProgress, 1000); 
    }
  };

  const pauseAudio = () => {
    if (sound) {
      sound.pause();
      clearInterval(intervalRef.current); 
    }
  };

  const updateProgress = () => {
    if (sound && sound.playing()) {
      console.log("Audio is playing. Current time: ", sound.seek());
      setCurrentTime(sound.seek());
    } else {
      console.log("Audio is not playing");
      clearInterval(intervalRef.current); 
    }
  };

  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const clickRatio = clickPosition / progressBar.clientWidth;
    const newTime = clickRatio * duration;
    if (sound) {
      sound.seek(newTime);
      setCurrentTime(newTime);
      if (!sound.playing()) {
        updateProgress();
      }
    }
  };

  return (
    <div>
      <div className="controls">
        <button onClick={isPlaying ? pauseAudio : playAudio}>
          {isPlaying ? (
            <img
              src="/Icons/Pause.png"
              alt="pause icon"
              width={20}
              height={20}
              id="audio-icon"
            />
          ) : (
            <img
              src="/Icons/Play.png"
              alt="play icon"
              width={20}
              height={20}
              id="audio-icon"
            />
          )}
        </button>
      </div>
      <div
        ref={progressBarRef}
        onClick={handleProgressClick}
        style={{
          width: '30vw',
          height: '10px',
          backgroundColor: '#ddd',
          position: 'relative',
          cursor: 'pointer',
          borderRadius: '10px'
        }}
      >
        <div
          style={{
            width: `${(currentTime / duration) * 100}%`,
            height: '100%',
            backgroundColor: '#4682b4'
          }}
        />
      </div>
      <div className='paragraph'>
        {duration === null 
          ? 'Loading...' 
          : `${Math.floor(currentTime / 60)}:${('0' + Math.floor(currentTime % 60)).slice(-2)} / ${Math.floor(duration / 60)}:${('0' + Math.floor(duration % 60)).slice(-2)}`}
      </div>
    </div>
  );
};

export default AudioPlayer;
