import { useState, useEffect } from "react";
import "./Tech.css";

const Tech = ({ tech }) => {
  console.log(tech);

  const [selectedTech, setSelectedTech] = useState(tech ? tech[0] : null);

  useEffect(() => {
    if (!tech) return;
    setSelectedTech(tech[0]);
  }, [tech]);

  const handleTechSelect = (index) => {
    setSelectedTech(tech[index]);
  };

  return (
    <div className="tech-container">
      <div className="tech-title">
        <span>03</span>Space Launch 101
      </div>
      {tech ? (
        <>
          <div className="tech-img-wrapper">
            <img
              src={
                window.innerWidth <= 1365
                  ? require(`../../${selectedTech.images.landscape}`)
                  : require(`../../${selectedTech.images.portrait}`)
              }
              alt={selectedTech.name}
            />
          </div>
          <nav className="tech-nav">
            {tech.map((item, index) => (
              <div
                key={index}
                className="tech-item"
                onClick={() => handleTechSelect(index)}
              >
                {index + 1}
              </div>
            ))}
          </nav>
          <div className="tech-info">
            <div className="tech-title">The Terminology...</div>
            <div className="tech-name">{selectedTech.name}</div>
            <div className="tech-desc">{selectedTech.description}</div>
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default Tech;
