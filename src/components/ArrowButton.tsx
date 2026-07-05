import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const ArrowButton: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 200;
      setIsAtBottom(scrollPosition >= threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight / 1.5, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className='bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all duration-200'
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        // backgroundColor: 'blue',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        padding: '15px',
        cursor: 'pointer',
        zIndex: 1000,
      }}
      aria-label={isAtBottom ? 'Scroll to Top' : 'Scroll Down'}
    >
      {isAtBottom ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
    </button>
  );
};

export default ArrowButton;
