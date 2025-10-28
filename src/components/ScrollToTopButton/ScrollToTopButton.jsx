import React, { useState, useEffect } from "react";

export default function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Obtenemos el contenedor principal
    const main = document.querySelector("main");

    if (!main) return;

    // Escuchamos el scroll solo del <main>
    const toggleVisibility = () => {
      if (main.scrollTop > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    main.addEventListener("scroll", toggleVisibility);
    return () => main.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Scrollear suavemente dentro del contenedor principal
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        padding: "0.6rem 1rem",
        fontSize: "2rem",
        backgroundColor: "transparent",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 1000,
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      🎈
    </button>
  );
}