import React, { useEffect, useRef, useState } from "react";
import "./ImageGrid.css";

const images = [
  "about/1.png",
  "about/2.png",
  "about/3.png",
  "about/4.png",
  "about/5.png",
  "about/6.png",
  "about/7.png",
  "about/8.png",
  "about/1.png",
  "about/2.png",
  "about/3.png",
  "about/4.png",
];

const images2 = [
  "about/6.png",
  "about/3.png",

  "about/6.png",

  "about/7.png",
  "about/4.png",
  "about/8.png",
  "about/4.png",
  "about/1.png",
  "about/5.png",
  "about/2.png",
  "about/8.png",
  "about/3.png",
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

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const openModal = (index) => {
    setCurrentImage(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setFullScreen(false);
      }
    }
  };

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
        <div className="inner-gallery">
          {images2.map((src, index) => (
            <div
              className="relative hover-wrapper"
              key={index}
              onClick={() => openModal(index)}
            >
              <div className="absolute bottom-5 left-5 z-50 icon-hide flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <p className="text-white">
                  {Math.floor(Math.random() * 20) + 1}
                </p>
              </div>
              <img
                src={src}
                alt={`Image ${index}`}
                className="gallery-img z-0 relative"
              />
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
      {modalOpen && (
        <div className="modal ">
          <div
            className="flex flex-col gap-1 items-center justify-center w-10 absolute top-10 left-10
          "
            onClick={toggleFullScreen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-4 self-end"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-4 self-start"
            >
              <path
                fill-rule="evenodd"
                d="M20.03 3.97a.75.75 0 0 1 0 1.06L6.31 18.75h9.44a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v9.44L18.97 3.97a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute top-10 left-36 z-50 icon-hide flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <p className="text-white">{Math.floor(Math.random() * 20) + 1}</p>
          </div>
          <button onClick={closeModal} className="close-modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          {currentImage !== 0 && (
            <button onClick={prevImage} className="left-arrow">
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
          <img
            src={images2[currentImage]}
            alt="Expanded view"
            className={`modal-image ${fullScreen ? "fullscreen" : ""}`}
          />
          {images2.length - 1 !== currentImage && (
            <button onClick={nextImage} className="right-arrow">
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
      )}
    </div>
  );
};

export default ImageGallery;
