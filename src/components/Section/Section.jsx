import { useTheme } from "@/context/ThemeContext";
import '@/components/Section/Section.css';
import Line from '@/components/Line/Line';
import Title from "@/components/Title/Title";

const Section = ({ title, cards, CardComponent, showLine = true }) => {
  const { isDarkMode } = useTheme();

  const sectionStyle = {
    backgroundColor: isDarkMode ? "var(--color-background-body-dark)" : "#ffffff", 
    color: isDarkMode ? "#f1f1f1" : "#000000", 
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <section className="section" style={sectionStyle}>
      <div style={{ textAlign: "center" }}>
        <Title title={title}/>
      </div>
      <div className='cards-container'>
        {cards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
      {showLine && <Line />}
    </section>
  );
};

export default Section;
