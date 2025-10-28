import { useTheme } from '@/context/ThemeContext';
import '@/components/MemberButton/MemberButton.css';

export default function MemberButton({ imgsrc, name }) {
  const { isDarkMode } = useTheme();

  const memberButtontStyle = {
    backgroundColor: isDarkMode ? 'var(--color-encabezado-dark)' : 'var(--color-encabezado)',
    borderColor: isDarkMode ? 'var(--color-encabezado-dark)' : 'var(--color-encabezado)',
    transition: 'color 0.3s ease',
  };

  return (
    <div className="member-button" style={memberButtontStyle}>
      <div className="member-img-container">
        <img src={imgsrc} alt={name} className="member-img" />
      </div>
      <span className="member-name">{name}</span>
    </div>
  );
}
