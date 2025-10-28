import { useTheme } from '@/context/ThemeContext';
import "@/pages/DiagramaCarpetas/DiagramaCarpetas.css";
import Header from '@/components/Header/Header';
import carpetasHeader from '@/assets/carpetas/header_carpetas.webp';
import carpetasHeaderDark from '@/assets/carpetas/header_carpetas_dark.webp';
import Footer from '@/components/Footer/Footer';

export default function DiagramaCarpetas() {
  const { isDarkMode } = useTheme();

  // 🔹 Estilos dinámicos según el modo
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

  const treeStyle = {
    backgroundColor: isDarkMode ? '#2e2e2e' : '#fff',
    color: isDarkMode ? '#d4d4d4' : '#4c4c4c',
    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)',
    padding: '1.5rem',
    borderRadius: '8px',
    overflowX: 'auto',
    whiteSpace: 'pre',
    lineHeight: '1.4',
    display: 'inline-block',
    textAlign: 'left',
    maxWidth: '100%',
    boxSizing: 'border-box'
  };

  const treeLines = [
    "📁 project-root/",
    "│",
    "├── 📁 src/",
    "│   ├── 📁 assets/",
    "│   │   ├── 📁 bitacora/",
    "│   │   │   └── (imágenes relacionadas con la bitácora)",
    "│   │   ├── 📁 carina/",
    "│   │   │   └── (imágenes de la pág. de Carina)",
    "│   │   ├── 📁 carpetas/",
    "│   │   │   └── (imágenes de la pág. de diagrama de carpetas)",
    "│   │   ├── 📁 componentes/",
    "│   │   │   └── (imágenes de la pág. de diagrama de componentes)",
    "│   │   ├── 📁 eduardo/",
    "│   │   │   └── (imágenes de la pág. de Eduardo)",
    "│   │   ├── 📁 inicio/",
    "│   │   │   └── (imágenes de la pág. de inicio)",
    "│   │   ├── 📁 lugares/",
    "│   │   │   └── (imágenes de la pág. de Lugares de Argentina)",
    "│   │   ├── 📁 simpsons",
    "│   │   │    └── (imágenes de la pág. de Los Simpsons)",
    "│   │   ├── 📄 car.png",
    "│   │   └── 📄 eduardo.webp",
    "│   │",
    "│   ├── 📁 components/",
    "│   │   ├── 📁 Card/",
    "│   │   │   ├── 📄 Card.css",
    "│   │   │   └── 📄 Card.jsx",
    "│   │   ├── 📁 Carrusel/",
    "│   │   │   ├── 📄 Carrusel.css",
    "│   │   │   └── 📄 Carrusel.jsx",
    "│   │   ├── 📁 DarkModeButton/",
    "│   │   │   ├── 📄 DarkModeButton.css",
    "│   │   │   └── 📄 DarkModeButton.jsx",
    "│   │   ├── 📁 DropDownMenu/",
    "│   │   │   ├── 📄 DropDownMenu.css",
    "│   │   │   └── 📄 DropDownMenu.jsx",
    "│   │   ├── 📁 FlippingCard/",
    "│   │   │   ├── 📄 FlippingCard.css",
    "│   │   │   └── 📄 FlippingCard.jsx",
    "│   │   ├── 📁 Footer/",
    "│   │   │   ├── 📄 Footer.css",
    "│   │   │   └── 📄 Footer.jsx",
    "│   │   ├── 📁 Header/",
    "│   │   │   ├── 📄 Header.css",
    "│   │   │   └── 📄 Header.jsx",
    "│   │   ├── 📁 Line/",
    "│   │   │   ├── 📄 Line.css",
    "│   │   │   └── 📄 Line.jsx",
    "│   │   ├── 📁 MemberButton/",
    "│   │   │   ├── 📄 MemberButton.css",
    "│   │   │   └── 📄 MemberButton.jsx",
    "│   │   ├── 📁 ScrollToTop/",
    "│   │   │   └── 📄 ScrollToTop.jsx",
    "│   │   ├── 📁 ScrollToTopButton/",
    "│   │   │   └── 📄 ScrollTopButton.jsx",
    "│   │   ├── 📁 Section/",
    "│   │   │   ├── 📄 Section.css",
    "│   │   │   └── 📄 Section.jsx",
    "│   │   ├── 📁 SideBar/",
    "│   │   │   ├── 📄 SideBar.css",
    "│   │   │   └── 📄 SideBar.jsx",
    "│   │   ├── 📁 Title/",
    "│   │   │   ├── 📄 Title.css",
    "│   │   │   └── 📄 Title.jsx",
    "│   │   └── 📁 ZoomableImage/",
    "│   │       └── 📄 ZoomableImage.jsx",
    "│   │", 
    "│   ├── 📁 context/",
    "│   │   └── 📄 ThemeContext.jsx",
    "│   │", 
    "│   ├── 📁 pages/",
    "│   │   ├── 📁 Bitacora/",
    "│   │   │   ├── 📄 Bitacora.css",
    "│   │   │   └── 📄 Bitacora.jsx",
    "│   │   ├── 📁 Carina/",
    "│   │   │   └── 📄 Carina.jsx",
    "│   │   ├── 📁 DiagramaCarpetas/",
    "│   │   │   ├── 📄 DiagramaCarpetas.css",
    "│   │   │   └── 📄 DiagramaCarpetas.jsx",
    "│   │   ├── 📁 Eduardo/",
    "│   │   │   └── 📄 Eduardo.jsx",
    "│   │   ├── 📁 Inicio/",
    "│   │   │   └── 📄 Inicio.jsx",
    "│   │   ├── 📁 LugaresArgentina/",
    "│   │   │   ├── 📄 LugaresArgentina.css",
    "│   │   │   └── 📄 LugaresArgentina.jsx",
    "│   │   ├── 📁 RenderTree/",
    "│   │   │   ├── 📄 RenderTree.css",
    "│   │   │   └── 📄 RenderTree.jsx",
    "│   │   └── 📁 Simpsons/",
    "│   │       ├── 📄 Simpsons.css",
    "│   │       └── 📄 Simpsons.jsx",
    "│   │",   
    "│   ├── 📁 styles/",
    "│   │   ├── 📄 _reset.css",
    "│   │   └── 📄 variables.css",
    "│   │", 
    "│   ├── 📄 App.css",
    "│   ├── 📄 App.jsx",
    "│   ├── 📄 index.css",
    "│   └── 📄 main.jsx",
    "│",
    "├── 📁 public/",
    "│   ├── 📁 assets/",
    "│   │   └── 📁 lugares",
    "│   │       └── (imágenes de lugares en formato .webp)",
    "│   ├── 📁 data/",
    "│   │   └── 📄 lugares.json",
    "│   ├── 📄 favicon.png",
    "│   └── 📄 logo.png",
    "│",
    "├── 📄 .gitignore",
    "├── 📄 eslint.config.js",
    "├── 📄 index.html",
    "├── 📄 package-lock.json",
    "├── 📄 package.json",
    "├── 📄 README.md",
    "├── 📄 vercel.json",
    "└── 📄 vite.config.js",
  ];

  const tree = treeLines.join("\n");

  return (
    <>
      <Header
        height="40vh"
        name="Diagrama de"
        lastName="Carpetas"
        age=""
        city=""
        backgroundImage={carpetasHeader}
        backgroundImageDark={carpetasHeaderDark}
        textColor="var(--color-white-yellow)"
      />
      <div className="folder-container" style={containerStyle} translate="no">
        <h2 style={sectionHeadingStyle}>Árbol de archivos</h2>
        <p style={paragraphStyle}>
          Estructura del proyecto que muestra la organización de carpetas, componentes, estilos y archivos de configuración utilizados en la aplicación.
        </p>
        <div class="file-tree-wrapper">
          <pre className="file-tree" style={treeStyle}>{tree}</pre>
        </div>
      </div>
      <Footer />
    </>
  );
}
