// import React, { useState, useEffect } from 'react';
// import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

// const ArrowButton: React.FC = () => {
//   const [isAtBottom, setIsAtBottom] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.innerHeight + window.scrollY;
//       const threshold = document.body.offsetHeight - 200;
//       setIsAtBottom(scrollPosition >= threshold);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleClick = () => {
//     if (isAtBottom) {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       window.scrollBy({ top: window.innerHeight / 1.5, behavior: 'smooth' });
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className='bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all duration-200'
//       style={{
//         position: 'fixed',
//         bottom: '30px',
//         right: '30px',
//         // backgroundColor: 'blue',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '50%',
//         padding: '15px',
//         cursor: 'pointer',
//         zIndex: 1000,
//       }}

import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const SHOW_AFTER_SCROLL = 300;

const ArrowButton: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 200;
      setIsAtBottom(scrollPosition >= threshold);
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight / 1.5, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isAtBottom ? "Scroll to Top" : "Scroll Down"}
      className={`fixed bottom-[30px] right-[30px] z-[1000] p-4 rounded-full text-white bg-blue-500 border-none shadow-lg cursor-pointer transition-all duration-300 ease-out hover:bg-blue-600 hover:scale-110 hover:shadow-xl hover:shadow-blue-300/50 active:scale-95 ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span
        key={isAtBottom ? "up" : "down"}
        className="flex items-center justify-center animate-[iconIn_300ms_ease-out]"
      >
        {isAtBottom ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
      </span>

      <style>{`
        @keyframes iconIn {
          from { opacity: 0; transform: rotate(-90deg) scale(0.5); }
          to { opacity: 1; transform: rotate(0deg) scale(1); }
        }
      `}</style>
    </button>
  );
};

export default ArrowButton;