import { useState, useEffect } from "react";
import "./Tech.css";

const Tech = ({ tech }) => {
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
          <nav className="techNav">
            {tech.map((item, index) => (
              <div
                key={index}
                className="techItem"
                onClick={() => handleTechSelect(index)}
              >
                {index + 1}
              </div>
            ))}
          </nav>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default Tech;
