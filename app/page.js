"use client";

import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = () => {
    isModalOpen ? closeModal() : null
  };

  return (
    <div className="flex flex-col m-10 justify-center h-screen">
      <button
        onClick={openModal}
        className="bg-gray-200 rounded-md p-3 mx-auto"
      >
        Show Modal
      </button>

      {isModalOpen && (
        <div
          className="fixed top-0 p-10 left-0 w-full h-full bg-gray-400 flex justify-center align-center"
          onClick={handleOverlayClick}
        >
          <div className="flex flex-col bg-white p-20 rounded-xl">
            <button
              className="flex justify-end text-[30px]"
              onClick={closeModal}
            >
              X
            </button>
            <h2>Modal Content</h2>
            <p>This is a simple modal.</p>
          </div>
        </div>
      )}
    </div>
  );
}
