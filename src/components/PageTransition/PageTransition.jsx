import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import rayo from '../../../public/rayo.png';

export default function PageTransition({ children }) {
  const [flash, setFlash] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setFlash(true);
    const img = document.createElement('img');
    img.src = rayo;
    img.className = 'rayo-flash';
    document.body.appendChild(img);
    setTimeout(() => {
      img.remove();
      setFlash(false);
    }, 600);
  }, [location]);

  return <>{children}</>;
}