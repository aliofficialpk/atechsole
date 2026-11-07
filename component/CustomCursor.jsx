import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {

    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      const el = document.elementFromPoint(x, y);
      const isClickable = el && el.closest('a, button, .clickable');
      if (isClickable) {
        if (ringRef.current) ringRef.current.classList.add('hovered');
        if (dotRef.current) dotRef.current.classList.add('hovered');
      } else {
        if (ringRef.current) ringRef.current.classList.remove('hovered');
        if (dotRef.current) dotRef.current.classList.remove('hovered');
      }
    };


    document.addEventListener('mousemove', moveCursor);

    // Using elementFromPoint on mousemove for hover detection

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
};

export default CustomCursor;
