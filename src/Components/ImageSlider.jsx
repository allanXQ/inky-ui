import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; // Importing CSS for animations

const ImageSlider = ({ images }) => {
  const [currentBatch, setCurrentBatch] = useState(0);
  const batchCount = 8; // Number of images per batch

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBatch(
        (prev) => (prev + 1) % Math.ceil(images.length / batchCount)
      );
    }, 3000); // Change image set every 3 seconds

    return () => clearInterval(interval);
  }, [images.length, batchCount]);

  const batchImages = images.slice(
    currentBatch * batchCount,
    (currentBatch + 1) * batchCount
  );

  return (
    <div className="image-slider">
      {batchImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className="slide-animation"
        />
      ))}
    </div>
  );
};

export default ImageSlider;
