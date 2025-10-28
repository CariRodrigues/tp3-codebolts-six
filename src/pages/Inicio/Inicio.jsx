import { useTheme } from "@/context/ThemeContext";
import Header from '@/components/Header/Header';
import inicioHeader from '@/assets/inicio/inicio_header.webp';
import inicioHeaderDark from '@/assets/inicio/inicio_header-dark.webp';
import Section from '@/components/Section/Section';
import Card from '@/components/Card/Card.jsx';
import Footer from '@/components/Footer/Footer';
import ScrollToTopBtn from "@/components/ScrollToTopButton/ScrollToTopButton";
import { href } from "react-router-dom";


export default function Inicio() {
  const { isDarkMode } = useTheme(); 

  const stack = [
    { 
      resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      alt: "HTML5", 
      text: "HTML5",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML" 
    },
    { 
      resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      alt: "CSS3", 
      text: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS" 
    },
    { 
      resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      alt: "JavaScript", 
      text: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
    },
    { 
      resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      alt: "React", 
      text: "React",
      href: "https://react.dev/"
     }
  ];

  const tools = [
    { 
      resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
      alt: "Git", 
      text: "Git",
      href: "https://git-scm.com/" 
    },
    { 
      resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
      alt: "GitHub", 
      text: "GitHub",
      href: "https://github.com/"
    },
    { 
      resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", 
      alt: "VSCode", 
      text: "Visual Studio Code",
      href: "https://code.visualstudio.com/"
     },
    { 
      resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", 
      alt: "Vercel", 
      text: "Vercel",
      href: "https://vercel.com/"
     }
  ];

  // 🔹 Variables de estilo
  const pageBackground = {
    background: isDarkMode ? "var(--color-background-body-dark)" : "#ffffff",
    transition: "background 0.3s ease"
  };

  const headerTextStyle = {
    color: isDarkMode ? "#f1f1f1" : "#000000",
    padding: '2rem',
    fontSize: '2.3rem',
    fontWeight: 'bold',
    transition: "color 0.3s ease"
  };

  const paragraphStyle = {
    padding: '2rem',
    margin: '0',
    fontSize: '1rem',
    lineHeight: '1.6',
    color: isDarkMode ? "#f1f1f1" : "#000000",
    background: isDarkMode ? "#2a2a2a" : "#ffffff",
    transition: "background 0.3s ease, color 0.3s ease"
  };

  const linkStyle = {
    color: isDarkMode ? "#a2d5f2" : "#007acc",
    textDecoration: 'none',
    transition: "color 0.3s ease"
  };

  return (
    <div className='sectionInicio' style={pageBackground}>
      <Header
        name="Grupo 6"
        lastName="Codebolts Six"
        age=""
        city=""
        backgroundImage={inicioHeader}
        backgroundImageDark={inicioHeaderDark}
        textColor="var(--color-white-yellow)"
      />

      <h1 style={headerTextStyle}>
        Bienvenidos a nuestra página web
      </h1>

      <p style={paragraphStyle}>
        Somos Carina, de La Plata, y Eduardo, de Mar del Plata, estudiantes de la Tecnicatura en Desarrollo de Software a distancia del{" "}
        <a href='https://ifts29.edu.ar/' target="_blank" rel="noreferrer" style={linkStyle}>
          Instituto de Formación Técnica Superior N° 29.
        </a>
        <br/>
        Hemos trabajado juntos en otros proyectos académicos, pero este es nuestro primer trabajo desarrollado con React, realizado para la materia Desarrollo de Sistemas Web Frontend.
        Nuestro objetivo es crear una página web que refleje nuestra identidad, intereses y habilidades, combinando elegancia y funcionalidad.
        A través de este proyecto, buscamos aplicar nuestros conocimientos en diseño web y desarrollo frontend, ofreciendo una experiencia que permita a los visitantes conocernos mejor como futuros profesionales del área.
      </p>

      <Section title="Stack Tecnológico" cards={stack} CardComponent={Card} />
      <Section title="Herramientas de Desarrollo" cards={tools} CardComponent={Card} showLine={false} />
      <ScrollToTopBtn/>
      <Footer />
    </div>
  );
}
