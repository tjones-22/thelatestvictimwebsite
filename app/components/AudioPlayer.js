// src/components/AudioPlayer.js
import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import Image from 'next/image';



const AudioPlayer = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressBarRef = useRef(null);
  const intervalRef = useRef(null); // Ref to manage the interval

  useEffect(() => {
    const newSound = new Howl({
      src: ['/audio/Bleeding_Eyes_Short.wav'], // Replace with your song path
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
        clearInterval(intervalRef.current); // Clear the interval
      }
    });
    setSound(newSound);

    return () => {
      if (newSound) {
        newSound.unload();
      }
      clearInterval(intervalRef.current); // Clear the interval on unmount
    };
  }, []);

  const playAudio = () => {
    if (sound) {
      sound.play();
      intervalRef.current = setInterval(updateProgress, 1000); // Update progress every second
    }
  };

  const pauseAudio = () => {
    if (sound) {
      sound.pause();
      clearInterval(intervalRef.current); // Clear the interval
    }
  };

  const updateProgress = () => {
    if (sound && sound.playing()) {
      console.log("Audio is playing. Current time: ", sound.seek());
      setCurrentTime(sound.seek());
    } else {
      console.log("Audio is not playing");
      clearInterval(intervalRef.current); // Clear the interval if audio is not playing
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
        // Ensure progress bar updates immediately when clicking while paused
        updateProgress();
      }
    }
  };

  return (
    <div>
      <div className="controls">
        <button onClick={isPlaying ? pauseAudio : playAudio}>
          {isPlaying ? (
            <Image
            
                src="/icons/Pause.png"
                alt="pause icon"
                width={20}
                height={20}
                id="audio-icon"
            />
          ) : (
            <Image
                src="/icons/Play.png"
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
      <div>
        {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)} / {Math.floor(duration / 60)}:{('0' + Math.floor(duration % 60)).slice(-2)}
      </div>
    </div>
  );
};

export default AudioPlayer;
