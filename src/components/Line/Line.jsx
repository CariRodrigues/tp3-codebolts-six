import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import '@/components/Line/Line.css';

export default function Line() {
  const { isDarkMode } = useTheme();

  const lineStyle = {
    backgroundColor: isDarkMode ? '#f1f1f1' : '#333333', 
  };

  const containerStyle = {
    backgroundColor: isDarkMode ? 'var(--color-background-body-dark)' : '#ffffff', 
    color: isDarkMode ? '#f1f1f1' : '#333333',           
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  return (
    <div className="divisor-icono" style={containerStyle}>
      <span className="linea" style={lineStyle}></span>
      <i className="fa-solid fa-bolt"></i>
      <span className="linea" style={lineStyle}></span>
    </div>
  );
}
