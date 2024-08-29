import React, { useEffect, useRef, useState } from "react";

const LazyVideo = ({ toggleModal, setModalContent }) => {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div id="video" ref={videoRef} className="video-container  relative w-full">
      <div className="absolute inset-0 bg-gradient"></div>
      <video
        id="hero-video"
        autoPlay
        muted
        loop
        className="h-[480px] w-full object-cover"
      >
        {loaded && <source src="./file.mp4" type="video/mp4" />}
      </video>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="size-28 z-20 absolute top-44 left-[44vw] cursor-pointer"
        onClick={() => {
          setModalContent(
            <video
              id="hero-video-modal"
              controls
              className="w-full h-full object-cover"
            >
              <source src="./file.mp4" type="video/mp4" />
            </video>
          );
          toggleModal();
        }}
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default LazyVideo;
