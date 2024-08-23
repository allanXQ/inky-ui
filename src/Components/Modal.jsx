import React from "react";

const Modal = ({ show, onClose, isTestimonial, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ">
      <div className="bg-black rounded-lg shadow-lg p-8 relative max-w-[70vw] max-h-[95vh] border border-[#636363] flex flex-col items-center ">
        <div className="relative ">
          <img
            src="./topquote.png"
            className="absolute top-[-60px]  left-[-10px] md:left-[-50px]  w-18"
          />
        </div>

        {children}
        <div className="flex items-center border border-white rounded-lg ">
          <button id="about-btn" className="py-2 px-16" onClick={onClose}>
            <p className="text-md">Close</p>
          </button>
        </div>
        <div className="relative ">
          <img
            src="./bottomquote.png"
            width={70}
            height={30}
            className="absolute bottom-[-10px] right-[-10px] md:right-[-50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
