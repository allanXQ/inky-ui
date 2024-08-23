import React, { useEffect, useRef, useState } from "react";
import "./ImageGrid.css";

const ImageGallery = ({ images }) => {
  const galleryRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction) => {
    if (direction === "left") {
      galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScroll(); // Check on mount
    window.addEventListener("resize", checkScroll); // Check on window resize
    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  useEffect(() => {
    galleryRef.current.addEventListener("scroll", checkScroll);
    return () => {
      if (galleryRef.current) {
        galleryRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="gallery-container">
      {canScrollLeft && (
        <button onClick={() => scroll("left")} className="absolute left-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-10"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div className="gallery" ref={galleryRef}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index}`} />
        ))}
      </div>
      {canScrollRight && (
        <button onClick={() => scroll("right")} className="absolute right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-10"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ImageGallery;
