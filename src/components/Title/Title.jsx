import { useEffect, useRef, useState } from "react";
import '@/components/Title/Title.css';

export default function Title ({title}){
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // -> La quita cuando deja de verse
        }
      },
      { threshold: 0.5 } // se activa cuando el 50% del título está visible
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

    return (
    <h2
      ref={titleRef}
      className={`underline ${isVisible ? "animar" : ""}`}
    >
      {title}
    </h2>
  );
}