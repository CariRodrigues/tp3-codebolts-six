import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import '@/components/Footer/Footer.css';

export default function Footer() {
  const { isDarkMode } = useTheme();

  const footerStyle = {
    backgroundColor: isDarkMode ? 'var(--color-encabezado-dark)' : 'var(--color-encabezado)',
    color: isDarkMode ? '#c2c2c2ff' : '#fff',       
    padding: '1rem',
    textAlign: 'center',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };

  return (
    <footer className="Footer" style={footerStyle}>
      <p>Desarrollo de Sistemas Web (Front End) - IFTS29 - 2025</p>
    </footer>
  );
}
