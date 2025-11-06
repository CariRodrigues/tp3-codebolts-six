import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import "@/components/Section/Section.css";
import Line from "@/components/Line/Line";
import Title from "@/components/Title/Title";
import "./SkillProgressBar.css";

const SkillProgressBar = ({ title, skills = [], showLine = true }) => {
  const { isDarkMode } = useTheme();
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const sectionStyle = {
    backgroundColor: isDarkMode
      ? "var(--color-background-body-dark)"
      : "#ffffff",
    color: isDarkMode ? "#f1f1f1" : "#000000",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <section ref={sectionRef} className="section" style={sectionStyle}>
      <div style={{ textAlign: "center" }}>
        <Title title={title} />
      </div>

      <div className="skills-list">
        {skills.map(({ skill, level = 0, color }, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill}</span>
              <span className="skill-level">{level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: animated ? `${level}%` : "0%",
                  background: color || "linear-gradient(90deg, #2196f3, #1976d2)",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {showLine && <Line />}
    </section>
  );
};

export default SkillProgressBar;
