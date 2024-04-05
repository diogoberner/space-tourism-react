import { Link } from "react-router-dom";
import { useState } from "react";

import "./Destination.css";
import planetsJson from "../../assets/planets.json";

import Planet from "../../components/Planet/Planet";

const Destination = () => {
  const [planet, setPlanet] = useState(planetsJson[0]);
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <section className="destination">
      <div className="heading title5">
        <span>01</span>PICK YOUR DESTINATION
      </div>
      <nav className="planet-navbar">
        {planetsJson ? (
          planetsJson.map((planet, index) => (
            <Link key={index} className="nav-text" onClick={handleClick}>
              {planet.title}
            </Link>
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
