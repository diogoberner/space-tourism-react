import { useState } from "react";

import "./Destination.css";
import planetsJson from "../../assets/planets.json";

import Planet from "../../components/Planet/Planet";

const Destination = () => {
  const [planet, setPlanet] = useState(planetsJson[0]);
  const handleClick = (selectedTitle) => {
    if (!selectedTitle) return;
    const selectedPlanet = planetsJson.find((p) => p.title === selectedTitle);
    if (!selectedPlanet || selectedPlanet === planet) return;
    setPlanet(selectedPlanet);
  };

  return (
    <section className="destination">
      <div className="heading title5">
        <span>01</span>PICK YOUR DESTINATION
      </div>
      <nav className="planet-navbar">
        {planetsJson ? (
          planetsJson.map((p) => (
            <span
              key={p.title}
              className={
                planet.title === p.title ? "nav-text active" : "nav-text"
              }
              onClick={() => handleClick(p.title)}
            >
              {p.title}
            </span>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </nav>
      <Planet planet={{ ...planet }} />
    </section>
  );
};

export default Destination;
