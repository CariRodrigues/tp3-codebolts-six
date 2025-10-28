import { useTheme } from '@/context/ThemeContext';
import "@/pages/RenderTree/RenderTree.css";
import Header from '@/components/Header/Header';
import componentesHeader from '@/assets/componentes/header_componentes.webp';
import componentesHeaderDark from '@/assets/componentes/header_componentes_dark.webp';
import renderTreeImage from '@/assets/componentes/render_tree.webp';
import renderTreeImageDark from '@/assets/componentes/render_tree_dark.webp';
import Footer from '@/components/Footer/Footer';
import ZoomableImage from '@/components/ZoomableImage/ZoomableImage';

export default function RenderTree() {
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

  const imageTreeSrc = isDarkMode ? renderTreeImageDark : renderTreeImage;


  return (
    <>
      <Header
        height="40vh"
        name="Árbol de"
        lastName="Componentes"
        age=""
        city=""
        backgroundImage={componentesHeader}
        backgroundImageDark={componentesHeaderDark}
        textColor="var(--color-white-yellow)"
      />

      <div className="tree-container" style={containerStyle} translate="no">
        <h2 style={sectionHeadingStyle}>Componentes React</h2>
        <p style={paragraphStyle}>
          El siguiente render tree muestra la estructura jerárquica de los componentes dentro de la aplicación. Permite visualizar cómo se organizan y comunican entre sí, qué componentes actúan como contenedores y cuáles representan piezas reutilizables de UI. Esta vista facilita tanto el mantenimiento como la incorporación de nuevas funcionalidades, al brindar una comprensión clara de las dependencias y el flujo general de la interfaz.
        </p>
        {/* <div class="file-tree-wrapper">
          <img src={renderTreeImage} alt="Render tree" />
        </div> */}
        <div>
          <ZoomableImage src={imageTreeSrc} alt="Render tree" />
        </div>
      </div>

      <Footer />
    </>
  );
}
