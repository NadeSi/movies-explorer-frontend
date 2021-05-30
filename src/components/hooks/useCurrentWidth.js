import React, {useState, useEffect} from 'react';

export function useCurrentWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setTimeout(() => setWidth(window.innerWidth), 1000);
    }

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
