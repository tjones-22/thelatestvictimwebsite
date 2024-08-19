"use client";

import { useState, useEffect } from 'react';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';

const Videos = () => {
  const [videosK, setVideosK] = useState([]);
  const [videosN, setVideosN] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false); // New state for video loaded
  const [videosLoading, setVideosLoading] = useState({
    knittingFactory: true,
    newColony: true
  });

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const responseK = await fetch('/imagedata/KnittingVideos.json');
        const dataK = await responseK.json();
        setVideosK(dataK);
        setVideosLoading(prev => ({ ...prev, knittingFactory: false }));
      } catch (err) {
        console.log(err);
        setVideosLoading(prev => ({ ...prev, knittingFactory: false }));
      }

      try {
        const responseN = await fetch('/imagedata/NewColonyVideo.json');
        const dataN = await responseN.json();
        setVideosN(dataN);
        setVideosLoading(prev => ({ ...prev, newColony: false }));
      } catch (err) {
        console.log(err);
        setVideosLoading(prev => ({ ...prev, newColony: false }));
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (selectedVideo) {
      setVideoLoaded(false); // Reset video loaded state

      const player = videojs('video-player', {
        controls: true,
        autoplay: true,
        preload: 'auto',
        // Customize video.js options here
      });

      player.src({ src: selectedVideo, type: 'video/mp4' });

      player.on('loadeddata', () => {
        setLoading(false); // Hide loader
        setVideoLoaded(true); // Show video
      });

      return () => {
        if (player) {
          player.dispose();
        }
      };
    }
  }, [selectedVideo]);

  const handleVideoClick = (src) => {
    setLoading(true);
    setSelectedVideo(src);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setLoading(true); // Reset loading state
    setVideoLoaded(false); // Hide video
  };

  return (
    <>
      <h2 className="title-h3">Knitting Factory: June 28th 2024</h2>
      <div className="scroll-container">
        <div className="image-container">
          {videosK.map((video, index) => (
            <button
              className="photo"
              key={index}
              onClick={() => handleVideoClick(video.src)}
            >
              <img
                src={video.thumbnail}
                alt={`Thumbnail ${index}`}
                width={200}
                height={200}
                loading='lazy'
              />
            </button>
          ))}
        </div>
      </div>

      {videosLoading.knittingFactory && (
        <div className='loader'>
          <div className="custom-loader"></div>
        </div>
      )}

      <h2 className="title-h3">New Colony Beer Company: July 6th 2024</h2>
      {videosLoading.newColony && (
        <div className='loader'>
          <div className="custom-loader"></div>
        </div>
      )}
      <div className="scroll-container">
        <div className="image-container">
          {videosN.map((video, index) => (
            <button
              className="photo"
              key={index}
              onClick={() => handleVideoClick(video.src)}
            >
              <img
                src={video.thumbnail}
                alt={`Thumbnail ${index}`}
                width={200}
                height={200}
                loading='lazy'
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {loading && !videoLoaded && (
              <div className='loader'>
                <div className="custom-loader"></div>
              </div>
            )}
            <div className="video-container">
              {videoLoaded && (
                <video
                  id="video-player"
                  className="video-js vjs-default-skin"
                  controls
                  autoPlay
                  preload="auto"
                >
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Videos;
