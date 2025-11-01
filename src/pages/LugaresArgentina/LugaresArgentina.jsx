import { useTheme } from '@/context/ThemeContext';
import "@/pages/LugaresArgentina/LugaresArgentina.css";
import Header from '@/components/Header/Header';
import lugaresHeader from '@/assets/lugares/header_lugares.webp';
import lugaresHeaderDark from '@/assets/lugares/header_lugares_dark.webp';
import { useEffect, useState } from "react";
import Footer from '@/components/Footer/Footer';
import Card from '@/components/Card/Card';
import ScrollToTopBtn from '@/components/ScrollToTopButton/ScrollToTopButton';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function LugaresArgentina() {
  const { isDarkMode } = useTheme();

  const containerStyle = {
    backgroundColor: isDarkMode ? 'var(--color-background-body-dark)' : '#fff',
    color: isDarkMode ? '#f1f1f1' : '#272727',
    transition: 'all 0.3s ease',
    padding: '0',
    maxWidth: '900px',
    margin: '0 auto 2rem',
    lineHeight: 1.6,
  };

  const sectionHeadingStyle = {
    color: isDarkMode ? '#a2d5f2' : '#1a1a1a',
    borderBottom: isDarkMode ? '2px solid #555' : '2px solid #ddd',
    paddingBottom: '0.3rem',
    fontSize: '1.8rem',
    margin: '2rem 0 1rem'
  };

  const paragraphStyle = {
    color: isDarkMode ? '#e0e0e0' : '#000000',
    marginBottom: '1rem'
  };

  // Estado de los lugares
  const [lugares, setLugares] = useState([]);

  // Estado de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Cargar lugares desde JSON
  useEffect(() => {
    fetch('/data/lugares.json')
      .then(res => res.json())
      .then(data => setLugares(data))
      .catch(err => console.error("Error cargando lugares:", err));
  }, []);

  // Filtrar lugares según el término de búsqueda
  const lugaresFiltrados = lugares.filter(lugar =>
    lugar.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lugar.subtitulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='main'>
      <Header
        height="40vh"
        name="Lugares de"
        lastName="Argentina"
        backgroundImage={lugaresHeader}
        backgroundImageDark={lugaresHeaderDark}
        textColor="var(--color-white-yellow)"
        shadowColor ="2px 5px 10px rgba(0, 0, 0, 0.9)"
      />

      <div className="lugar-container" style={containerStyle} translate="no">
        <h2 style={sectionHeadingStyle}>Lugares turísticos</h2>
        <p style={paragraphStyle}>
          Estos son algunos de los lugares turísticos más hermosos de la Argentina. Cada tarjeta muestra el nombre del destino y la provincia a la que pertenece.
        </p>
        <p style={paragraphStyle}>
          Los datos se cargan dinámicamente desde un recurso JSON y se representan en tarjetas interactivas mediante el manejo de estado y el mapeo de componentes en React.
        </p>

        <SearchBar
          placeholder="Buscar lugar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="file-tree-wrapper">
          {lugares.length === 0 ? (
            <p>Cargando lugares...</p>
          ) : lugaresFiltrados.length > 0 ? (
            lugaresFiltrados.map((lugar) => (
              <Card
                key={lugar.id}
                resource={`/assets/lugares/${lugar.img}`}
                alt={lugar.titulo}
                text={lugar.titulo}
                subtitle={lugar.subtitulo}
                imgHeight="200px"
              />
            ))
          ) : (
            <p>No se encontraron lugares que coincidan con la búsqueda.</p>
          )}
        </div>
      </div>
      <ScrollToTopBtn/>
      <Footer />
    </div>
  );
}
