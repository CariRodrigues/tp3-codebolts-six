import React from "react";
import Header from "@/components/Header/Header.jsx";
import Section from "@/components/Section/Section.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Card from '@/components/Card/Card.jsx';
import SkillProgressBar from "@/components/SkillProgressBar/SkillProgressBar.jsx";
import SimpsonsFavorites from '@/components/SimpsonsFavorites/SimpsonsFavorites';
import Carrusel from "@/components/Carrusel/Carrusel.jsx";
import ScrollToTopBtn from "@/components/ScrollToTopButton/ScrollToTopButton";
import 'animate.css';
import SocialNetworkButton from "@/components/SocialNetworkButton/SocialNetworkButton.jsx";


// 🖼️ Importamos las imágenes de Carina
import carinaHeader from "@/assets/carina/carina_header.webp";
import carinaHeaderDark from "@/assets/carina/carina_header-dark.webp";

// Habilidades (pueden ser distintas, pero de momento usaremos las de ejemplo)
import SkillOne from "@/assets/carina/SkillOne.png";
import SkillTwo from "@/assets/carina/SkillTwo.png";
import SkillThree from "@/assets/carina/SkillThree.png";
import SkillFour from "@/assets/carina/SkillFour.png";

// Películas
import ButterflyEffect from "@/assets/carina/film1.jpg";
import HarryPotter4 from "@/assets/carina/film2.jpg";
import HideAndSeek from "@/assets/carina/film3.jpg";

// Música
import ColdPlay from "@/assets/carina/music1.webp";
import Ntvg from "@/assets/carina/music2.jpg";
import GustavoCerati from "@/assets/carina/music3.jpg";

export default function Carina() {
  const habilidades = [
    { resource: SkillOne, alt: "Cocinar", text: "Cocinar", imgHeight: "380px" },
    { resource: SkillTwo, alt: "Enseñar", text: "Enseñar", imgHeight: "380px" },
    { resource: SkillThree, alt: "Sacar Fotos", text: "Sacar Fotos", imgHeight: "380px" },
    { resource: SkillFour, alt: "Leer", text: "Leer Libros", imgHeight: "380px" },
  ];

  const peliculas = [
    {
      resource: ButterflyEffect,
      alt: "Efecto mariposa",
      text: "The Butterfly Effect",
      href: "https://en.wikipedia.org/wiki/The_Butterfly_Effect",
      imgHeight: "370px"
    },
    {
      resource: HarryPotter4,
      alt: "Harry Potter y el Caliz de Fuego",
      text: "Harry Potter y el Caliz de Fuego",
      href: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire_(film)",
      imgHeight: "370px"
    },
    {
      resource: HideAndSeek,
      alt: "Hide and Seek",
      text: "Hide and Seek",
      href: "https://en.wikipedia.org/wiki/Hide_and_Seek_(2005_film)",
      imgHeight: "370px"
    },
  ];

  const musica = [
    {
      resource: ColdPlay,
      alt: "ColdPlay",
      text: "ColdPlay",
      href: "https://www.youtube.com/watch?v=yKNxeF4KMsY&list=RDyKNxeF4KMsY&start_radio=1",
      imgHeight: "380px"
    },
    {
      resource: Ntvg,
      alt: "No te va Gustar",
      text: "No te va Gustar",
      href: "https://www.youtube.com/watch?v=GBsRPUxMkkw&list=RDGBsRPUxMkkw&start_radio=1",
      imgHeight: "380px"
    },
    {
      resource: GustavoCerati,
      alt: "Gustavo Cerati",
      text: "Gustavo Cerati",
      href: "https://www.youtube.com/watch?v=eAO7CEcCD3s&list=RDeAO7CEcCD3s&start_radio=1",
      imgHeight: "380px"
    },
  ];

  // Simpsons Cards
  const simpsonsCards = [
    { characterId: 4 },
    { characterId: 90 },
    { characterId: 1 },
  ];


  const conocidos = [2, 3, 4, 5, 6, 7, 8, 11, 13, 14];
  const meGustaria = [9, 10, 12, 15, 17, 18, 1];
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

  const redesCari = {
    github: "https://github.com/CariRodrigues",
    linkedin: "https://www.linkedin.com/in/cari-rodrigues",
    instagram: "https://www.instagram.com/cari_rodriguess",
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <Header
        name="Carina"
        lastName="Rodrigues"
        age="36"
        ageText="años"
        city="La Plata"
        backgroundImage={carinaHeader}
        backgroundImageDark={carinaHeaderDark}
        textColor="var(--color-heading)"
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
      <SocialNetworkButton networks={redesCari} />
      <Footer />
    </div>
  );
}
