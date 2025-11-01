import { useTheme } from '@/context/ThemeContext';
import "@/pages/Simpsons/Simpsons.css";
import Header from '@/components/Header/Header';
import simpsonsHeader from '@/assets/simpsons/header_simpsons.webp';
import simpsonsHeaderDark from '@/assets/simpsons/header_simpsons_dark.webp';
import FlippingCard from '@/components/FlippingCard/FlippingCard';
import { useEffect, useState } from "react";
import Footer from '@/components/Footer/Footer';
import ScrollToTopBtn from '@/components/ScrollToTopButton/ScrollToTopButton';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function Simpsons() {
  const { isDarkMode } = useTheme();

  // Estilos dinámicos según el modo
  const containerStyle = {
    backgroundColor: isDarkMode ? 'var(--color-background-body-dark)' : '#fff', // gris oscuro / gris claro
    color: isDarkMode ? '#f1f1f1' : '#272727',
    transition: 'all 0.3s ease',
    padding: '0',
    maxWidth: '900px',
    margin: '0 auto 2rem',
    lineHeight: 1.6,
  };

  const headingStyle = {
    color: isDarkMode ? '#a2d5f2' : '#1a1a1a',
    borderBottom: isDarkMode ? '2px solid #555' : '2px solid #ddd',
    transition: 'all 0.3s ease',
    margin: '2rem 0 1rem',
    paddingBottom: '2rem',
    textAlign: 'center',
    fontSize: '3rem'
  };

  const sectionHeadingStyle = {
    color: isDarkMode ? '#a2d5f2' : '#1a1a1a',
    borderBottom: isDarkMode ? '2px solid #555' : '2px solid #ddd',
    paddingBottom: '0.3rem',
    fontSize: '1.8rem',
    margin: '2rem 0 1rem'
  };

  const subHeadingStyle = {
    color: isDarkMode ? '#cfcfcf' : '#444',
    fontSize: '1.4rem',
    margin: '1.5rem 0 0.5rem'
  };

  const paragraphStyle = {
    color: isDarkMode ? '#e0e0e0' : '#000000',
    marginBottom: '2rem'
  };

  const linkStyle = {
    color: isDarkMode ? '#4ec9b0' : '#1e90ff',
    textDecoration: 'none'
  };


 // Carga de personajes
  const [allCharacters, setAllCharacters] = useState([]); // Todos los personajes
  const [characters, setCharacters] = useState([]); // Personajes mostrados
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Estado de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Cargar TODOS los personajes al inicio (solo una vez)
  useEffect(() => {
    const fetchAllCharacters = async () => {
      setLoading(true);
      try {
        const firstResponse = await fetch('https://thesimpsonsapi.com/api/characters');
        const firstData = await firstResponse.json();
        const totalPages = firstData.pages;
        
        // Cargar todas las páginas
        const promises = [];
        for (let i = 1; i <= totalPages; i++) {
          promises.push(
            fetch(`https://thesimpsonsapi.com/api/characters?page=${i}`)
              .then(res => res.json())
              .then(data => data.results)
          );
        }
        
        const allResults = await Promise.all(promises);
        const allChars = allResults.flat();
        
        setAllCharacters(allChars);
        console.log("Loaded all characters:", allChars.length);
      } catch (err) {
        console.error("Error fetching all characters:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, []);

  // Filtrar y paginar según el término de búsqueda
  useEffect(() => {
    const filtered = searchTerm.trim()
      ? allCharacters.filter(char =>
          char.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allCharacters;

    const itemsPerPage = 20;
    const totalFilteredPages = Math.ceil(filtered.length / itemsPerPage);
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    
    setCharacters(filtered.slice(startIdx, endIdx));
    setTotalPages(totalFilteredPages || 1);
    
    console.log(`Showing ${filtered.length} characters (page ${page} of ${totalFilteredPages})`);
  }, [allCharacters, searchTerm, page]);

  const [pageInput, setPageInput] = useState(page);

  useEffect(() => {
    // Al cambiar la página, sube al inicio del contenedor
    const container = document.querySelector('.main');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page]);

  useEffect(() => {
    setPageInput(page);
  }, [page]);



  return (
    <div className='main'>

      <Header
        height="40vh"
        name="Personajes de"
        lastName="The Simpsons"
        age=""
        city=""
        backgroundImage={simpsonsHeader}
        backgroundImageDark={simpsonsHeaderDark}
        textColor="var(--color-white-yellow)"
      />

      <div className="tree-container" style={containerStyle} translate="no">
        <h2 style={sectionHeadingStyle}>Todos los personajes de la serie</h2>
        <p style={paragraphStyle}>
          "Los Simpsons" es una serie de animación estadounidense creada por Matt Groening en 1989. La historia gira en torno a la familia Simpson: Homer, Marge, Bart, Lisa y Maggie, quienes viven en la ciudad ficticia de Springfield.
        </p>
        <p style={paragraphStyle}>
          Los datos de los personajes en esta página se obtienen de manera dinámica utilizando la API de The Simpsons (<a href="https://thesimpsonsapi.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>https://thesimpsonsapi.com/</a>). La API proporciona información detallada de cada personaje, como nombre, imagen y otros atributos relevantes, que se presentan en tarjetas interactivas. Este enfoque permite practicar conceptos de desarrollo web como consumo de APIs, renderizado dinámico de componentes y manejo de estado en React, ofreciendo una experiencia de aprendizaje práctica y aplicable a proyectos reales.
        </p>

        <SearchBar
          placeholder="Buscar personaje..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1); // Resetea a la primera página al buscar
          }}
        />

        {loading ? (
          <p>Cargando personajes...</p>
        ) : (
          <>
            <div className="file-tree-wrapper">
              {characters.length > 0 ? (
                characters.map((char) => (
                  <FlippingCard key={char.id} character={char} />
                ))
              ) : (
                <p>No se encontraron personajes.</p>
              )}
            </div>

            <div className="pagination-buttons">
              <button
                onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                Anterior
              </button>

              <span>Página </span>
              <input
                type="number"
                min={1}
                max={totalPages}
                value={pageInput}
                onChange={(e) => setPageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const newPage = Number(pageInput);
                    if (newPage >= 1 && newPage <= totalPages) {
                      setPage(newPage);
                    }
                  }
                }}
                style={{
                  width: '3rem',
                  textAlign: 'center',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  margin: '0 0.5rem',
                  color: isDarkMode ? '#f1f1f1' : '#272727',
                }}
              />
              <span> de {totalPages}</span>

              <button
                onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
              >
                Siguiente
              </button>
            </div>
          </>
        )}

      </div>
      <ScrollToTopBtn />
      <Footer />
    </div>
  );
}
