import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import "@/components/Card/Card.css";

const Card = ({ resource, alt, text, subtitle, href, imgHeight }) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Colores del bloque de contenido (usamos variables CSS)
  const contentBg = isDarkMode ? "#2c2c2c" : "#ffffff";
  const contentText = isDarkMode ? "#f1f1f1" : "#333333";
  const contentHoverBg = isDarkMode ? "#8bc34a" : "#bab16aff";
  const contentHoverText = isDarkMode ? "#000000" : "#ffffff";

  // Sombra base y sombra de hover
  const baseShadow = isDarkMode
    ? "0 6px 12px rgba(255, 255, 255, 0.1)"
    : "0 6px 12px rgba(0, 0, 0, 0.1)";
  const hoverShadow = isDarkMode
    ? "0 16px 28px rgba(255, 255, 255, 0.25)"
    : "0 16px 28px rgba(0, 0, 0, 0.25)";

  const cardStyle = {
    backgroundColor: isDarkMode ? "#2c2c2c" : "#ffffff",
    color: isDarkMode ? "#f1f1f1" : "#333333",
    boxShadow: isHovered ? hoverShadow : baseShadow,
    borderRadius: "1rem",
    overflow: "hidden",
    transform: isHovered ? "translateY(-6px)" : "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",

    // Variables CSS para colores dinámicos
    "--content-bg": contentBg,
    "--content-text": contentText,
    "--content-hover-bg": contentHoverBg,
    "--content-hover-text": contentHoverText,
  };

  const imgStyle = {
    height: imgHeight || "260px",
    objectFit: "cover",
    width: "100%",
    transition: "transform 0.4s ease",
    transform: isHovered ? "scale(1.05)" : "none",
  };

  const contentStyle = {
    padding: "1rem",
    textAlign: "center",
  };

  const CardContent = (
    <>
      <img src={resource} alt={alt} style={imgStyle} className="card-img" />
      <div className="card-content" style={contentStyle}>
        <p className="card-title">{text}</p>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
    </>
  );

  return (
    <div
      className="card"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="card-link">
          {CardContent}
        </a>
      ) : (
        <div>{CardContent}</div>
      )}
    </div>
  );
};

export default Card;
