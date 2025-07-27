import React, { useState, useRef, useEffect } from 'react';

const ImageCarousel = ({ 
  images = [], 
  title = "Product Images",
  height = "h-64",
  showThumbnails = true,
  showCounter = true,
  showArrows = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);

  // If no images provided, show placeholder
  const displayImages = images.length > 0 ? images : [
    { src: null, alt: "Product Image 1" },
    { src: null, alt: "Product Image 2" },
    { src: null, alt: "Product Image 3" }
  ];

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index, e) => {
    if (e) e.stopPropagation();
    setCurrentIndex(index);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    setTranslateX(-diff);
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    setIsDragging(false);
    const threshold = 50;
    
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        nextSlide(e);
      } else {
        prevSlide(e);
      }
    }
    
    setTranslateX(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide(e);
      } else if (e.key === 'ArrowRight') {
        nextSlide(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative ${height}`}>
      {/* Main Image Display */}
      <div 
        ref={carouselRef}
        className={`relative h-full bg-gray-300 overflow-hidden ${height === 'h-64' ? 'rounded-lg' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {displayImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translateX(${index === currentIndex ? translateX : 0}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease'
            }}
          >
            {image.src ? (
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 text-lg">{image.alt}</span>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Arrows - Show if multiple images and arrows enabled */}
        {displayImages.length > 1 && showArrows && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-opacity z-10"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-opacity z-10"
              aria-label="Next image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            {showCounter && (
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs z-10">
                {currentIndex + 1} / {displayImages.length}
              </div>
            )}

            {/* Thumbnail Navigation - Show if enabled and multiple images */}
            {showThumbnails && (
              <div className="absolute bottom-2 left-2 flex space-x-1 z-10">
                {displayImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => goToSlide(index, e)}
                    className={`w-8 h-8 rounded overflow-hidden border-2 transition-all ${
                      index === currentIndex 
                        ? 'border-white scale-110' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {image.src ? (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">{index + 1}</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel; 