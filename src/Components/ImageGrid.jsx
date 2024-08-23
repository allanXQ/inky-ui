import React, { useEffect, useRef, useState } from "react";
import "./ImageGrid.css";

const images = [
  "about/img1.jpeg",
  "about/img2.jpeg",
  "about/img3.jpeg",
  "about/img4.jpeg",
  "about/img5.jpeg",
  "about/img6.jpeg",
  "about/img7.jpeg",
  "about/img8.jpeg",
  "about/img1.jpeg",
  "about/img2.jpeg",
  "about/img3.jpeg",
  "about/img4.jpeg",
];

const images2 = [
  "about/img6.jpeg",
  "about/img3.jpeg",

  "about/img6.jpeg",

  "about/img7.jpeg",
  "about/img4.jpeg",
  "about/img8.jpeg",
  "about/img4.jpeg",
  "about/img1.jpeg",
  "about/img5.jpeg",
  "about/img2.jpeg",
  "about/img8.jpeg",
  "about/img3.jpeg",
];

const ImageGallery = () => {
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
        <div className="inner-gallery">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Image ${index}`} />
          ))}
        </div>
        <div className="inner-gallery">
          {images2.map((src, index) => (
            <div className="relative" key={index}>
              <img src={src} alt={`Image ${index}`} className="gallery-img" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 absolute"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          ))}
        </div>
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
