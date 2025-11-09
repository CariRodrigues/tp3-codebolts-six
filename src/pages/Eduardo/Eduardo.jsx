import Header from '@/components/Header/Header';
import Section from '@/components/Section/Section';
import Footer from '@/components/Footer/Footer';
import Card from '@/components/Card/Card.jsx';
import SimpsonsFavorites from '@/components/SimpsonsFavorites/SimpsonsFavorites.jsx';
import Carrusel from '@/components/Carrusel/Carrusel.jsx';
import SkillProgressBar from '@/components/SkillProgressBar/SkillProgressBar.jsx';
import ScrollToTopBtn from '@/components/ScrollToTopButton/ScrollToTopButton';

// || Imagenes importadas ||
import eduardoHeader from '@/assets/eduardo/eduardo_header.webp';
import eduardoHeaderDark from '@/assets/eduardo/eduardo_header-dark.webp';

// Habilidades
import construyendo from '@/assets/eduardo/construyendo.webp';
import aprendizaje from '@/assets/eduardo/aprendizaje.webp';
import leer from '@/assets/eduardo/leer.webp';
import pizza from '@/assets/eduardo/pizza.webp';

// Películas
import bladeRunner from '@/assets/eduardo/blade_runner.webp';
import theMatrix from '@/assets/eduardo/the_matrix.webp';
import interstellar from '@/assets/eduardo/interstellar.webp';

// Música
import beatlesAbbeyRoad from '@/assets/eduardo/beatles_abbey_road.webp';
import darkSide from '@/assets/eduardo/dark_side.webp';
import blackAlbum from '@/assets/eduardo/black_album.webp';

const Eduardo = () => {
  const habilidades = [
    { resource: construyendo, alt: "Diseñar y construir cosas", text: "Diseñar y construir cosas" },
    { resource: aprendizaje, alt: "Aprendizaje continuo", text: "Aprendizaje continuo" },
    { resource: leer, alt: "Leer cuentos para dormir", text: "Leer cuentos para dormir" },
    { resource: pizza, alt: "Preparar pizzas", text: "Preparar pizzas" },
  ];

  const peliculas = [
    {
      resource: bladeRunner,
      alt: "Blade Runner (1982)",
      text: "Blade Runner (1982)",
      href: "https://en.wikipedia.org/wiki/Blade_Runner",
    },
    {
      resource: theMatrix,
      alt: "The Matrix (1999)",
      text: "The Matrix (1999)",
      href: "https://en.wikipedia.org/wiki/The_Matrix",
    },
    {
      resource: interstellar,
      alt: "Interstellar (2014)",
      text: "Interstellar (2014)",
      href: "https://en.wikipedia.org/wiki/Interstellar_(film)",
    },
  ];

  const musica = [
    {
      resource: beatlesAbbeyRoad,
      alt: "Abbey Road - The Beatles",
      text: "Abbey Road - The Beatles",
      href: "https://www.youtube.com/watch?v=wqaKHHxQFZc&list=OLAK5uy_k2JcEE3_maNjnVBKU2s1JjhaZ4rxwgaME&index=2",
    },
    {
      resource: darkSide,
      alt: "Dark Side of the Moon - Pink Floyd",
      text: "Dark Side of the Moon - Pink Floyd",
      href: "https://www.youtube.com/watch?v=k9ynZnEBtvw",
    },
    {
      resource: blackAlbum,
      alt: "The Black Album - Metallica",
      text: "The Black Album - Metallica",
      href: "https://www.youtube.com/watch?v=CHIWNDAwTqQ&list=OLAK5uy_l3qf_fJNreo3L6_ZPIaLOquqfTda--gZc&index=2",
    },
  ];

  // Simpsons Cards
  const simpsonsCards = [
    { characterId: 1 },
    { characterId: 3 },
    { characterId: 16 },
  ];

  const conocidos = [3, 8, 15];
  const meGustaria = [1, 6, 8, 12, 17];
  const verbos = {
    pasado: "Conocí",
    presente: "No conozco",
    futuro: "Me gustaría conocer",
  };

  const skills = [
    { skill: "Java", level: 85, color: "linear-gradient(90deg, #22f71e, #19c716)" },
    { skill: "Python", level: 75, color: "linear-gradient(90deg, #3776ab, #28527a)" },
    { skill: "JavaScript", level: 80, color: "linear-gradient(90deg, #f7df1e, #e5c700)" },
    { skill: "React", level: 65, color: "linear-gradient(90deg, #61dafb, #21a1f1)" },
    { skill: "HTML/CSS", level: 80, color: "linear-gradient(90deg, #e44d26, #f16529)" },
    { skill: "Git / GitHub", level: 75, color: "linear-gradient(90deg, #f05033, #24292e)" },
    { skill: "SQL / MySQL", level: 70, color: "linear-gradient(90deg, #00618a, #00758f)" },
    { skill: "MongoDB", level: 65, color: "linear-gradient(90deg, #4DB33D, #2E7D32)" },
  ];


  return (
    <>
      <Header
        name="Eduardo"
        lastName="Mendiola"
        age="44"
        ageText="años"
        city="Mar del Plata"
        backgroundImage={eduardoHeader}
        backgroundImageDark={eduardoHeaderDark}
      />
      <Section title="Habilidades" cards={habilidades} CardComponent={Card} />
      <SkillProgressBar title="Tech Stack" skills={skills} />
      <Section title="Películas Favoritas" cards={peliculas} CardComponent={Card} />
      <Section title="Música Favorita" cards={musica} CardComponent={Card} />
      <Section title="Personajes Favoritos de Los Simpsons" cards={simpsonsCards} CardComponent={SimpsonsFavorites} />
      <Carrusel
        folder="lugares"
        dataPath="/data/lugares.json"
        title="Lugares"
        conocidos={conocidos}
        meGustaria={meGustaria}
        verbos={verbos}
      />
      <ScrollToTopBtn />
      <Footer />
    </>
  );
};

export default Eduardo;
