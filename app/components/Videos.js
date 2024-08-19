"use client";
import { useState, useEffect } from 'react';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';

const Videos = () => {
  const [videosK, setVideosK] = useState([]);
  const [videosN, setVideosN] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
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
      const player = videojs('video-player', {
        controls: true,
        autoplay: true,
        preload: 'auto',
        // Customize video.js options here
      });

      player.src({ src: selectedVideo, type: 'video/mp4' });

      // Listen for the `canplay` event to hide the loader
      player.on('canplay', () => {
        setLoading(false);
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
    setLoading(false); // Hide loader when closing the modal
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
            {loading && (
              <div className='loader'>
                <div className="custom-loader"></div>
              </div>
            )}
            <div className="video-container">
              <video
                id="video-player"
                className="  video-js vjs-default-skin video"
                controls
                autoPlay
                preload="auto"
                onCanPlay={() => setLoading(false)}
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Videos;
