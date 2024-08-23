import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; // Importing CSS for animations

const ImageSlider = ({ images }) => {
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBatchIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((batch, index) => (
        <div
          key={index}
          className={`batch-container ${
            index === currentBatchIndex ? "active" : ""
          }`}
        >
          {batch.map((src, idx) => (
            <img key={idx} src={src} alt={`Slide ${idx}`} className="w-32" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
