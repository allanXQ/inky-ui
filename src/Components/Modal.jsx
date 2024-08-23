import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ">
      <div className="bg-black rounded-lg shadow-lg p-8 relative max-w-[70vw] max-h-[95vh] border border-[#636363] flex flex-col items-center ">
        {children}
        <div className="flex items-center border border-white rounded-lg ">
          <button id="about-btn" className="py-2 px-16" onClick={onClose}>
            <p className="text-md">Close</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
