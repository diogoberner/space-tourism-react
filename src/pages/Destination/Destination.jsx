import { Link } from "react-router-dom";

import "./Destination.css";
import planetsJson from "../../assets/planets.json";

import Planet from "../../components/Planet/Planet";

const Destination = () => {
  return (
    <section className="destination">
      <div className="heading title5">
        <span>01</span>PICK YOUR DESTINATION
      </div>
      <nav className="planet-navbar">
        {planetsJson ? (
          planetsJson.map((planet, index) => (
            <Link key={index} className="nav-text">
              {planet.title}
            </Link>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </nav>
      <Planet />
    </section>
  );
};

export default Destination;
