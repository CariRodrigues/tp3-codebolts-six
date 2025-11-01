import { useTheme } from '@/context/ThemeContext';

export default function SearchBar({ placeholder, value, onChange }) {
  const { isDarkMode } = useTheme();

  const inputStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '300px',
    marginBottom: '1.5rem',
    color: isDarkMode ? '#f1f1f1' : '#272727',
    backgroundColor: isDarkMode ? '#333' : '#fff',
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={inputStyle}
    />
  );
}
