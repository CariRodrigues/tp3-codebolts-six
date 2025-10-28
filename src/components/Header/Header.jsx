import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import '@/components/Header/Header.css';


const Header = ({ height, name, lastName, city, age, ageText, backgroundImage, backgroundImageDark, textColor, shadowColor }) => {

  const { isDarkMode } = useTheme();
  console.log("Header - isDarkMode:", isDarkMode);

  const headerStyle = {
    backgroundImage: `url(${isDarkMode ? backgroundImageDark : backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    height: height || '100vh', // ← fallback
    position: 'relative',
    gridArea: 'header',
  };


  const textStyle = {
    color: textColor || 'var(--color-white-yellow)', // valor por defecto
    textShadow: shadowColor || '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <header style={headerStyle} className="header-information">
      <div className="header-left">
        <p style={textStyle} className="name">{name}</p>
        <p style={textStyle} className="lastname">{lastName}</p>
      </div>
      <div className="header-right">
        <div className="city-container">
          <p style={textStyle} className="city">{city}</p>
          <div className="sun_icon" id="sun_icon"></div>
        </div>
        <p style={textStyle} className="age_number">
          {age}
          <span style={textStyle} className="age_years">{ageText}</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
