import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import '@/components/DropDownMenu/DropDownMenu.css';
import MemberButton from '@/components/MemberButton/MemberButton';
import imgCar from '@/assets/car.png';
import imgEdu from '@/assets/eduardo.webp';

export default function DropDownMenu() {
  const { isDarkMode } = useTheme();

  const menuStyle = {
    backgroundColor: isDarkMode ? 'var(--color-encabezado-dark)' : 'var(--color-encabezado)',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className="dropdown-menu" style={menuStyle}>
      <Link to="/carina" className="dropdown-item" onClick={() => setIsSidebarOpen(false)}>
        <MemberButton imgsrc={imgCar} name="Carina" />
      </Link>

      <Link to="/eduardo" className="dropdown-item" onClick={() => setIsSidebarOpen(false)}>
        <MemberButton imgsrc={imgEdu} name="Eduardo" />
      </Link>
    </div>
  );
}
