import { useTheme } from "@/context/ThemeContext";
import "@/components/Card/Card.css";

const Card = ({ resource, alt, text, subtitle, href, imgHeight }) => {
  const { isDarkMode } = useTheme();

  const cardStyle = {
    backgroundColor: isDarkMode ? "#717171ff" : "#f5f5f5",
    color: isDarkMode ? "#f1f1f1" : "#000000",
    boxShadow: isDarkMode
      ? "0 4px 8px rgba(255, 255, 255, 0.1)"
      : "0 4px 8px rgba(0, 0, 0, 0.1)",
    
  };

  const imgStyle = imgHeight
    ? { height: imgHeight, objectFit: "cover", width: "100%" }
    : {}; // si no hay imgHeight => no toca el tamaño

 

  return (
    <div className="card" style={cardStyle}>
      {/* Si NO hay href, renderizamos un div para que no se vea clickable */}
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          <img src={resource} alt={alt} className="card-img" style={imgStyle} />
          <p className="card-title">{text}</p>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </a>
      ) : (
        <div>
          <img src={resource} alt={alt} className="card-img" style={imgStyle} />
          <p className="card-title">{text}</p>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
    </div>
  );
};

export default Card;



// import React from "react";
// import { useTheme } from "@/context/ThemeContext";
// import "@/components/Card/Card.css";

// const Card = ({ resource, alt, text, href }) => {
//   const { isDarkMode } = useTheme();

//   const cardStyle = {
//     backgroundColor: isDarkMode ? "#717171ff" : "#f5f5f5", 
//     color: isDarkMode ? "#f1f1f1" : "#000000", 
//     boxShadow: isDarkMode
//       ? "0 4px 8px rgba(255, 255, 255, 0.1)"
//       : "0 4px 8px rgba(0, 0, 0, 0.1)", 
//   };

//   return (
//     <div className="card" style={cardStyle}>
//       <a href={href} target="_blank" rel="noreferrer">
//         <img src={resource} alt={alt} className="card-img" />
//         <p>{text}</p>
//       </a>
//     </div>
//   );
// };

// export default Card;
