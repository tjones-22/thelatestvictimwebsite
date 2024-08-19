import Image from 'next/image';
import { useState, useEffect } from 'react';

const Videos = () => {
  const [imagesK, setImagesK] = useState([]);
  const [imagesN, setImagesN] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true); // Global loading state
  const [imagesLoading, setImagesLoading] = useState({
    knittingFactory: true,
    newColony: true
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responseK = await fetch('/imagedata/ImageData.json');
        const dataK = await responseK.json();
        setImagesK(dataK);
        setImagesLoading(prev => ({ ...prev, knittingFactory: false }));
      } catch (err) {
        console.log(err);
        setImagesLoading(prev => ({ ...prev, knittingFactory: false }));
      }

      try {
        const responseN = await fetch('/imagedata/ImgNC.json');
        const dataN = await responseN.json();
        setImagesN(dataN);
        setImagesLoading(prev => ({ ...prev, newColony: false }));
      } catch (err) {
        console.log(err);
        setImagesLoading(prev => ({ ...prev, newColony: false }));
      }

      const handleTouchMove = (e) => {
        e.preventDefault();
      };

      const container = document.querySelector('.image-container');
      container.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        container.removeEventListener('touchmove', handleTouchMove);
      };
    };

    fetchImages();
  }, []);

  const handleImageClick = (src) => {
    setLoading(true);
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setLoading(false);
  };

  const handleImageLoad = () => {
    // Set loading to false only if all images have been loaded
    if (!imagesLoading.knittingFactory && !imagesLoading.newColony) {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="title-h3">Knitting Factory: June 28th 2024</h2>

          
      <div className="scroll-container hide">
          <div className="image-container">
            {imagesK.map((image, index) => (
              <button
                className="photo"
                key={index}
                onClick={() => handleImageClick(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  onLoad={handleImageLoad}
                  loading='lazy'
                />
              </button>
            ))}
        </div>
      </div>

      {imagesLoading.knittingFactory && (
        <div className='loader'>
          <div className="custom-loader"></div>
        </div>
      )}
          
      <div className="scroll-container">
        <div className="image-container">
          {imagesK.map((image, index) => (
            <button
              className="photo"
              key={index}
              onClick={() => handleImageClick(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                onLoad={handleImageLoad}
                loading='lazy'
              />
            </button>
          ))}
        </div>
      </div>

      <h2 className="title-h3">New Colony Beer Company: July 6th 2024</h2>
        {imagesLoading.newColony && (
          <div className='loader'>
            <div className="custom-loader"></div>
          </div>
        )}
       
      <div className="scroll-container">
        <div className="image-container">
          {imagesN.map((image, index) => (
            <button
              className="photo"
              key={index}
              onClick={() => handleImageClick(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                onLoad={handleImageLoad}
                loading='lazy'
              />
            </button>
          ))}
        </div>
      </div>


      {/* modal */}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            {loading && (
              <div className='loader'>
                <div className="custom-loader"></div>
              </div>
            )}
            <div className='img-div'>
              <img
                src={selectedImage}
                alt="Selected"
                width={window.innerWidth} 
                height={window.innerHeight} 
                onLoad={() => setLoading(false)}
                className='img'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Videos;
