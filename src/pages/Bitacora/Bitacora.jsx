import { useTheme } from '@/context/ThemeContext';
import "@/pages/Bitacora/Bitacora.css";
import Header from '@/components/Header/Header';
import carpetasHeader from '@/assets/bitacora/header_bitacora.webp';
import carpetasHeaderDark from '@/assets/bitacora/header_bitacora_dark.webp';
import Footer from '@/components/Footer/Footer';
import ScrollToTopBtn from '@/components/ScrollToTopButton/ScrollToTopButton';

export default function Bitacora() {
  const { isDarkMode } = useTheme();

  // 🔹 Estilos dinámicos según el modo
  const containerStyle = {
    backgroundColor: isDarkMode ? 'var(--color-background-body-dark)' : '#fff', // gris oscuro / gris claro
    color: isDarkMode ? '#f1f1f1' : '#272727',
    transition: 'all 0.3s ease',
    // padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
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


  return (
    <>
      <Header
        height="40vh"
        name="Registro de"
        lastName="Bitácora"
        age=""
        city=""
        backgroundImage={carpetasHeader}
        backgroundImageDark={carpetasHeaderDark}
        textColor="var(--color-white-yellow)"
      />

      <div className="bitacora-container" style={containerStyle} translate="no">
        <h2 style={sectionHeadingStyle}>Registro de Actividades</h2>
        <p style={paragraphStyle}>
          Esta sección contiene una descripción del proceso de desarrollo del proyecto,
          incluyendo: decisiones de diseño tomadas por el equipo, dificultades encontradas y cómo se resolvieron y cambios importantes realizados durante la implementación.
        </p>

        <p style={paragraphStyle}>
          La bitácora está pensada para registrar el proceso de trabajo y debe ampliarse en el TP2, y
          TP3, incorporando reflexiones sobre la evolución del proyecto.
        </p>

        <ol>
          <li>05/09/25: Se definió el esquema de colores y tipografía.</li>
          <li>07/09/25: Implementadas animaciones en la portada.</li>
          <li>12/09/25: Ajustes de responsive.</li>
          <li>18/09/25: Creación de páginas individuales de cada integrante.</li>
          <li>25/09/25: Mejoras y correcciones generales.</li>
          <li>28/09/25: Inicio de migración a React - Configuración del proyecto con Vite.</li>
          <li>30/09/25: Implementación de ThemeContext para manejo global del modo oscuro.</li>
          <li>02/10/25: Creación de componentes base: Header, Footer, Sidebar.</li>
          <li>03/10/25: Configuración de React Router para navegación SPA.</li>
          <li>06/10/25: Desarrollo del componente DropDownMenu y MemberButton.</li>
          <li>08/10/25: Implementación del componente Carrusel con autoplay.</li>
          <li>10/10/25: Creación de FlippingCard con efectos 3D CSS.</li>
          <li>13/10/25: Desarrollo de componentes Card, Title, Line y Section.</li>
          <li>14/10/25: Implementación de DarkModeButton integrado con Context.</li>
          <li>15/10/25: Migración completa de páginas de integrantes a componentes React.</li>
          <li>16/10/25: Configuración de path aliases (@) y optimización de imports.</li>
          <li>17/10/25: Implementación de ScrollToTop y ajustes de navegación.</li>
          <li>18/10/25: Finalización de bitácora completa y documentación del proyecto.</li>
          <li>19/10/25: Creación del componente Simpsons con FlippingCards interactivas.</li>
          <li>19/10/25: Implementación del componente LugaresArgentina con integración de datos JSON.</li>
          <li>19/10/25: Instalación de react-zoom-pan-pinch e implementación de ZoomableImage en RenderTree.</li>
        </ol>

        <section>
          <h2 style={sectionHeadingStyle}>Primer Etapa</h2>
          <h3 style={subHeadingStyle}>Decisiones de Diseño</h3>
          <p style={paragraphStyle}>
            El equipo decidió utilizar una paleta de colores basada en tonos azules y grises para transmitir
            profesionalismo y modernidad. Además, se seleccionó la tipografía 'Roboto' por su legibilidad y estilo
            contemporáneo. Se optó por un diseño responsive para garantizar una experiencia óptima en dispositivos
            móviles y tablets.
          </p>
        </section>

        <section>
          <h3 style={subHeadingStyle}>Dificultades Encontradas</h3>
          <p style={paragraphStyle}>
            Durante el desarrollo, enfrentamos problemas con la implementación de animaciones en la portada, lo que
            requirió investigar y aplicar técnicas de CSS avanzadas. También hubo desafíos al ajustar el diseño para
            pantallas pequeñas, especialmente en la navegación, que se resolvieron utilizando media queries y
            pruebas en diferentes dispositivos.
          </p>
        </section>

        <section>
          <h3 style={subHeadingStyle}>Cambios Importantes</h3>
          <p style={paragraphStyle}>
            Inicialmente, se planeó un diseño estático, luego se incorporo interactividad mediante JavaScript
            para mejorar la experiencia del usuario. Además, se reorganizó la estructura de carpetas del proyecto
            para facilitar el mantenimiento y la colaboración entre los integrantes del equipo.
          </p>
        </section>

        <section>
          <h2 style={sectionHeadingStyle}>Análisis Completo del Sistema</h2>
          <h3 style={subHeadingStyle}>Archivos HTML de la primer etapa</h3>
          <p style={paragraphStyle}>
            El sistema incluye varias páginas HTML que representan diferentes secciones del sitio web:
            <ul>
              <li><strong>index.html:</strong> Página principal con información sobre el equipo y un diseño
                responsivo.</li>
              <li><strong>crc.html:</strong> Perfil de Carina con detalles personales y un diseño personalizado.</li>
              <li><strong>eduardo.html:</strong> Perfil de Eduardo con detalles personales y un diseño personalizado.
              </li>
              <li><strong>neuyin.html:</strong> Perfil de Neuyin con detalles personales y un diseño personalizado.</li>
              <li><strong>bitacora.html:</strong> Sección dedicada a registrar el proceso de desarrollo del proyecto.
              </li>
            </ul>
          </p>
        </section>

        <section>
          <h3 style={subHeadingStyle}>Archivos CSS de la primer etapa</h3>
          <p style={paragraphStyle}>El diseño visual se gestiona mediante varios archivos CSS:
            <ul>
              <li><strong>_reset_edu.css:</strong> Archivo de reinicio para garantizar consistencia entre navegadores.
              </li>
              <li><strong>style_eduardo.css:</strong> Estilos específicos para la página de Eduardo, incluyendo
                variables de colores y tipografías personalizadas.</li>
              <li><strong>style_neuyin.css:</strong> Estilos para la página de Neuyin, concordantes con todo el sitio
                web pero con animaciones que personalizan su perfil.</li>
              <li><strong>style.css:</strong> Estilos generales del sitio, incluyendo soporte para modo oscuro y
                diseño responsivo y estilos de la página de Carina.</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Archivos JavaScript de la primer etapa</h3>
          <p style={paragraphStyle}>La interactividad del sitio se implementa con varios scripts:
            <ul>
              <li><strong>main.js:</strong> Gestiona el modo oscuro, menús desplegables y popups interactivos.</li>
              <li><strong>scripts_eduardo.js:</strong> Añade efectos de paralaje y animaciones específicas para la
                página de Eduardo.</li>
              <li><strong>scripts_carina.js:</strong> Contiene funcionalidades específicas para la página de Carina,
                como el carrusel de imágenes.</li>
              <li><strong>scripts_neuyin.js:</strong> Se añaden funcionalidades que le brindan dinamismo al perfil.
              </li>
            </ul>
          </p>
        </section>
        <section>
          <h2 style={sectionHeadingStyle}>Segunda Etapa</h2>
          <h2 style={sectionHeadingStyle}>Configuración inicial y estructura</h2>
          <p style={paragraphStyle}>Creación del proyecto con React y React Router.
            Configuración de ThemeContext para manejar modo claro/oscuro.
            Definición de la estructura principal en App.jsx con:
            <ul>
              <li><strong>Sidebar:</strong> Lateral izquierda</li>
              <li><strong>Navegación con React Router:</strong> Implementación de React Router para manejar las
                distintas páginas dentro de 'main'. Con solo un click, cambia la ruta automáticamente y renderiza el componente correspondiente
                sin recargar la página.</li>
              <li><strong>Main:</strong> Muestra el contenido dinámico</li>
              <li><strong>Theme Provider:</strong> Para modo oscuro</li>
              <li><strong>Scroll To Top:</strong> Para navegación fluida</li>
              <li>Uso de <strong>useState</strong> para manejar el estado de la sidebar (abierta/cerrada) de forma inicial.</li>
            </ul>
          </p>
          <h2 style={sectionHeadingStyle}>Componentes</h2>
          <h3 style={subHeadingStyle}>Sidebar y DropDownMenu</h3>
          <p style={paragraphStyle}>Implementación de Barra lateral fija para escritorio
            <ul>
              <li><strong>DropDownMenu:</strong> Menú desplegable para ver los Integrantes del grupo</li>
              <li><strong>MemberButton:</strong> Creación de Botones para cada integrante con estilo propio</li>
              <li><strong>Ajuste de estilos:</strong> .sidebar, .nav-links, .nav-link, .menu-wrapper.</li>
              <li><strong>Mejoras Responsive:</strong> Menú hamburguesa visible en pantallas menores a 900px que despliega
                u oculta la barra lateral al hacer click</li>
            </ul>
          </p>
          <h3 style={subHeadingStyle}>Footer Y Header</h3>
          <p style={paragraphStyle}>Se conservaron estos elementos de la primera parte del proyecto ahora convertidos en componentes reutilizables.
            En el caso del Header se eligió el diseño establecido en Eduardo.html con una imagen de fondo adaptable al modo claro/oscuro. El Footer se mantuvo sin cambios.
          </p>
          <h3 style={subHeadingStyle}>Section y otros </h3>
          <p style={paragraphStyle}> Se dio estructura a las secciones a utilizar en las páginas de integrantes.</p>
          <ul>
            <li><strong>Title - Card - Line:</strong> Componentes comunes a varias secciones</li>
          </ul>
          <h3 style={subHeadingStyle}>Carrusel</h3>
          <p style={paragraphStyle}>Implementación de componente de carrusel para mostrar imágenes con navegación automática y manual.
            <ul>
              <li><strong>Carrusel:</strong> Componente principal que permite mostrar múltiples imágenes en rotación automática</li>
              <li><strong>Navegación:</strong> Botones de navegación manual (anterior/siguiente) y puntos indicadores</li>
              <li><strong>Responsivo:</strong> Adaptación automática a diferentes tamaños de pantalla</li>
              <li><strong>Autoplay:</strong> Funcionalidad de reproducción automática con pausa en hover</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>DarkModeButton</h3>
          <p style={paragraphStyle}>Botón toggle para alternar entre modo claro y oscuro del sitio.
            <ul>
              <li><strong>Context Integration:</strong> Conectado al ThemeContext para manejar el estado global del tema</li>
              <li><strong>Iconografía:</strong> Iconos dinámicos que cambian según el modo activo (sol/luna)</li>
              <li><strong>Transiciones:</strong> Animaciones suaves al cambiar entre modos</li>
              <li><strong>Persistencia:</strong> El estado del tema se mantiene entre sesiones</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>FlippingCard</h3>
          <p style={paragraphStyle}>Componente de tarjeta con efecto de volteo 3D para mostrar contenido en ambas caras.
            <ul>
              <li><strong>Efecto 3D:</strong> Animación de rotación CSS3 para volteo de tarjeta</li>
              <li><strong>Contenido Dual:</strong> Permite mostrar diferente información en el frente y reverso</li>
              <li><strong>Interactividad:</strong> Activación por hover o click según configuración</li>
              <li><strong>Customización:</strong> Estilos adaptables para diferentes contextos de uso</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>ScrollToTop</h3>
          <p style={paragraphStyle}>Componente utilitario que asegura que la página se desplace al inicio al cambiar de ruta.
            <ul>
              <li><strong>React Router Integration:</strong> Integrado con React Router para activarse en cambios de ruta</li>
              <li><strong>Smooth Scrolling:</strong> Desplazamiento suave hacia la parte superior</li>
              <li><strong>Performance:</strong> Optimizado para no interferir con la navegación normal</li>
              <li><strong>UX Improvement:</strong> Mejora la experiencia de usuario al navegar entre páginas</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Simpsons</h3>
          <p style={paragraphStyle}>Página interactiva dedicada a los personajes de Los Simpson con tarjetas giratorias.
            <ul>
              <li><strong>FlippingCard Integration:</strong> Utiliza el componente FlippingCard para mostrar información de personajes</li>
              <li><strong>Interactive Content:</strong> Tarjetas con información detallada en el frente y reverso</li>
              <li><strong>Character Gallery:</strong> Galería de personajes icónicos de la serie Los Simpson</li>
              <li><strong>Responsive Design:</strong> Adaptación automática para diferentes dispositivos</li>
              <li><strong>Theme Support:</strong> Integración completa con el sistema de modo claro/oscuro</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>LugaresArgentina</h3>
          <p style={paragraphStyle}>Componente que muestra lugares turísticos de Argentina con datos dinámicos.
            <ul>
              <li><strong>JSON Data Integration:</strong> Carga dinámica de datos desde el archivo lugares.json</li>
              <li><strong>Card Component Usage:</strong> Utiliza el componente Card para mostrar información de cada lugar</li>
              <li><strong>Dynamic Content:</strong> Contenido que se actualiza automáticamente desde el archivo de datos</li>
              <li><strong>Tourism Focus:</strong> Presentación atractiva de destinos turísticos argentinos</li>
              <li><strong>Error Handling:</strong> Manejo de errores en la carga de datos con useEffect</li>
              <li><strong>State Management:</strong> Uso de useState para gestionar el estado de los lugares cargados</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>ZoomableImage</h3>
          <p style={paragraphStyle}>Componente de imagen con funcionalidad de zoom implementado en RenderTree para mejor visualización.
            <ul>
              <li><strong>React Zoom Pan Pinch:</strong> Integración de la librería react-zoom-pan-pinch para funcionalidad de zoom</li>
              <li><strong>Interactive Zooming:</strong> Permite zoom in/out mediante scroll del mouse o gestos táctiles</li>
              <li><strong>Pan Functionality:</strong> Capacidad de arrastrar la imagen cuando está ampliada</li>
              <li><strong>Pinch to Zoom:</strong> Soporte para gestos pinch en dispositivos táctiles</li>
              <li><strong>Responsive Controls:</strong> Controles adaptativos para diferentes dispositivos</li>
              <li><strong>Enhanced UX:</strong> Mejora significativa en la experiencia de usuario para visualizar diagramas detallados</li>
              <li><strong>Reset Functionality:</strong> Capacidad de resetear zoom y posición a valores por defecto</li>
            </ul>
          </p>

        </section>

        
        <section>
          <h2 style={sectionHeadingStyle}>Gestión de Estado y Contexto</h2>
          <h3 style={subHeadingStyle}>ThemeContext</h3>
          <p style={paragraphStyle}>Sistema de gestión de estado global para el tema de la aplicación.
            <ul>
              <li><strong>Context API:</strong> Utiliza React Context para compartir el estado del tema entre componentes</li>
              <li><strong>Provider Pattern:</strong> Envuelve la aplicación para dar acceso global al tema</li>
              <li><strong>Custom Hook:</strong> Hook useTheme() para acceder fácilmente al contexto desde cualquier componente</li>
              <li><strong>Estado Persistente:</strong> Mantiene la preferencia del usuario entre sesiones de navegación</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 style={sectionHeadingStyle}>Estructura de Páginas</h2>
          <h3 style={subHeadingStyle}>Páginas de Integrantes</h3>
          <p style={paragraphStyle}>Cada integrante del equipo tiene su propia página personalizada:
            <ul>
              <li><strong>Inicio:</strong> Página principal del proyecto con información general del equipo</li>
              <li><strong>Carina:</strong> Perfil personalizado de Carina con diseño y contenido únicos</li>
              <li><strong>Eduardo:</strong> Perfil personalizado de Eduardo con animaciones y efectos especiales</li>
              <li><strong>DiagramaCarpetas/RenderTree:</strong> Visualización de la estructura del proyecto</li>
              <li><strong>Bitacora:</strong> Esta página que documenta el proceso de desarrollo</li>
              <li><strong>Simpsons:</strong> Página interactiva con personajes de Los Simpson usando FlippingCards</li>
              <li><strong>LugaresArgentina:</strong> Galería de destinos turísticos argentinos con datos dinámicos</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Gestión de Rutas</h3>
          <p style={paragraphStyle}>Implementación de navegación SPA (Single Page Application):
            <ul>
              <li><strong>React Router DOM:</strong> Manejo de rutas del lado del cliente</li>
              <li><strong>Navegación Declarativa:</strong> Uso de Link y NavLink para navegación sin recargas</li>
              <li><strong>Rutas Dinámicas:</strong> Configuración flexible de rutas en App.jsx</li>
              <li><strong>404 Handling:</strong> Manejo de rutas no encontradas</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 style={sectionHeadingStyle}>Arquitectura de Estilos</h2>
          <h3 style={subHeadingStyle}>CSS Variables y Tematización</h3>
          <p style={paragraphStyle}>Sistema de variables CSS para mantener consistencia visual:
            <ul>
              <li><strong>variables.css:</strong> Definición de colores, tipografías y espaciados del sistema</li>
              <li><strong>_reset.css:</strong> Normalización de estilos entre navegadores</li>
              <li><strong>Modo Claro/Oscuro:</strong> Variables específicas para cada tema</li>
              <li><strong>Responsive Design:</strong> Breakpoints y media queries organizados</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Organización de Componentes</h3>
          <p style={paragraphStyle}>Estructura modular de estilos por componente:
            <ul>
              <li><strong>Component-Scoped CSS:</strong> Cada componente tiene su propio archivo CSS</li>
              <li><strong>BEM Methodology:</strong> Convención de nomenclatura para clases CSS</li>
              <li><strong>CSS Modules:</strong> Evita conflictos de nombres entre componentes</li>
              <li><strong>Consistent Naming:</strong> Patrones coherentes en la denominación de clases</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 style={sectionHeadingStyle}>Recursos y Assets</h2>
          <h3 style={subHeadingStyle}>Gestión de Imágenes</h3>
          <p style={paragraphStyle}>Organización y optimización de recursos visuales:
            <ul>
              <li><strong>Estructura por Integrante:</strong> Carpetas específicas para assets de cada miembro (bitacora/, carina/, eduardo/, etc.)</li>
              <li><strong>Formato WebP:</strong> Optimización de imágenes para mejor rendimiento</li>
              <li><strong>Imágenes Adaptativas:</strong> Versiones claras y oscuras para diferentes temas</li>
              <li><strong>Lazy Loading:</strong> Carga diferida de imágenes para mejorar performance</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Datos del Proyecto</h3>
          <p style={paragraphStyle}>Manejo de datos estructurados:
            <ul>
              <li><strong>lugares.json:</strong> Datos de lugares y ubicaciones utilizados en el proyecto</li>
              <li><strong>lugares.js:</strong> Procesamiento y transformación de datos de lugares</li>
              <li><strong>Separación de Concerns:</strong> Datos separados de la lógica de presentación</li>
              <li><strong>JSON Structure:</strong> Formato estandarizado para facilitar mantenimiento</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 style={sectionHeadingStyle}>Herramientas de Desarrollo</h2>
          <h3 style={subHeadingStyle}>Build Tools y Configuración</h3>
          <p style={paragraphStyle}>Configuración del entorno de desarrollo:
            <ul>
              <li><strong>Vite:</strong> Build tool moderno para desarrollo rápido y hot reload</li>
              <li><strong>ESLint:</strong> Linter para mantener calidad y consistencia del código</li>
              <li><strong>Path Aliases:</strong> Configuración de rutas absolutas con @ para imports más limpios</li>
              <li><strong>Vercel Config:</strong> Configuración para deployment en Vercel</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Dependencias del Proyecto</h3>
          <p style={paragraphStyle}>Librerías y frameworks utilizados:
            <ul>
              <li><strong>React 18:</strong> Framework principal para la interfaz de usuario</li>
              <li><strong>React Router DOM:</strong> Manejo de navegación y rutas</li>
              <li><strong>React Zoom Pan Pinch:</strong> Librería para funcionalidad de zoom, pan y pinch en imágenes</li>
              <li><strong>Modern React Patterns:</strong> Hooks, Context API, y componentes funcionales</li>
              <li><strong>CSS3 Features:</strong> Flexbox, Grid, Animations, y Variables CSS</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 style={sectionHeadingStyle}>Reflexiones sobre la Migración a React</h2>
          <h3 style={subHeadingStyle}>Proceso de Transformación</h3>
          <p style={paragraphStyle}>La transición del TP1 (HTML/CSS/JS) al TP2 (React) representó un cambio significativo en la arquitectura del proyecto:
            <ul>
              <li><strong>Componentización:</strong> Conversión de elementos HTML repetitivos en componentes reutilizables</li>
              <li><strong>Estado Global:</strong> Implementación de Context API para reemplazar variables globales de JavaScript</li>
              <li><strong>Routing:</strong> Migración de páginas HTML separadas a un sistema de rutas SPA</li>
              <li><strong>Modularización CSS:</strong> Organización de estilos por componente para mejor mantenibilidad</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Beneficios Obtenidos</h3>
          <p style={paragraphStyle}>La migración a React trajo múltiples ventajas:
            <ul>
              <li><strong>Reutilización de Código:</strong> Componentes como Header, Footer, y Card son reutilizables</li>
              <li><strong>Mantenimiento Simplificado:</strong> Cambios en un componente se reflejan en toda la aplicación</li>
              <li><strong>Performance:</strong> SPA elimina recargas de página completa</li>
              <li><strong>Developer Experience:</strong> Hot reload y mejor debugging con React DevTools</li>
              <li><strong>Ecosistema NPM:</strong> Fácil integración de librerías como react-zoom-pan-pinch para funcionalidades avanzadas</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Desafíos Superados</h3>
          <p style={paragraphStyle}>Durante la migración se enfrentaron varios desafíos técnicos:
            <ul>
              <li><strong>Gestión de Estado:</strong> Aprendizaje del patrón Context/Provider para el tema global</li>
              <li><strong>CSS Scoping:</strong> Adaptación de estilos globales a component-scoped CSS</li>
              <li><strong>Asset Management:</strong> Reorganización de imágenes y recursos para el bundler de Vite</li>
              <li><strong>Routing Logic:</strong> Implementación de navegación declarativa con React Router</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 style={sectionHeadingStyle}>Lecciones Aprendidas y Próximos Pasos</h2>
          <h3 style={subHeadingStyle}>Mejores Prácticas Adoptadas</h3>
          <p style={paragraphStyle}>A lo largo del desarrollo se establecieron convenciones importantes:
            <ul>
              <li><strong>Naming Conventions:</strong> Nomenclatura consistente para componentes, archivos y variables</li>
              <li><strong>File Organization:</strong> Estructura de carpetas clara y predecible</li>
              <li><strong>Component Design:</strong> Principio de responsabilidad única para cada componente</li>
              <li><strong>Code Documentation:</strong> Comentarios significativos y documentación en bitácora</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Áreas de Mejora Identificadas</h3>
          <p style={paragraphStyle}>Se identificaron oportunidades de optimización para futuras iteraciones:
            <ul>
              <li><strong>Performance Optimization:</strong> Implementación de lazy loading y code splitting</li>
              <li><strong>Accessibility:</strong> Mejora en ARIA labels y navegación por teclado</li>
              <li><strong>Testing:</strong> Implementación de tests unitarios y de integración</li>
              <li><strong>TypeScript:</strong> Migración gradual para mejor type safety</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Mejoras de Usabilidad Implementadas</h3>
          <p style={paragraphStyle}>Implementaciones específicas para mejorar la experiencia del usuario:
            <ul>
              <li><strong>ZoomableImage en RenderTree:</strong> Funcionalidad de zoom interactivo para diagramas complejos</li>
              <li><strong>Gestos Táctiles:</strong> Soporte completo para pinch-to-zoom en dispositivos móviles</li>
              <li><strong>Navegación Intuitiva:</strong> Controles de pan y zoom para explorar diagramas detallados</li>
              <li><strong>Responsive Zoom:</strong> Adaptación automática de controles según el dispositivo</li>
              <li><strong>Reset Functionality:</strong> Botones y gestos para resetear vista a estado original</li>
              <li><strong>Library Integration:</strong> Uso estratégico de react-zoom-pan-pinch para funcionalidad robusta</li>
            </ul>
          </p>

          <h3 style={subHeadingStyle}>Preparación para TP3</h3>
          <p style={paragraphStyle}>La base establecida en TP2 facilita la evolución hacia TP3:
            <ul>
              <li><strong>Arquitectura Escalable:</strong> Estructura modular preparada para nuevas funcionalidades</li>
              <li><strong>State Management:</strong> Context API puede extenderse para gestión de estado más compleja</li>
              <li><strong>Component Library:</strong> Base de componentes reutilizables para futuras páginas</li>
              <li><strong>Design System:</strong> Variables CSS establecen fundamentos para sistema de diseño consistente</li>
            </ul>
          </p>
        </section>

      </div>
      <ScrollToTopBtn/>
      <Footer />
    </>
  );
}
