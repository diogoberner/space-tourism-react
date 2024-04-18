import "./Person.css";
import crew from "../../assets/crew.json";
import { useState } from "react";

const Person = () => {
  const [person, setPerson] = useState(crew[0]);

  const handleClick = (index) => {
    if (crew[index] === person) return;
    setPerson(crew[index]);
  };

  return (
    <section className="person-container">
      <div className="page-heading nav-text">
        <span>02</span>Meet Your Crew
      </div>
      <div className="person-img">
        <img src={require(`../../${person.images.webp}`)} alt={person.name} />
      </div>
      <nav className="person-nav">
        {crew.map((crewMember, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={
              person === crewMember ? "nav-circle selected" : "nav-circle"
            }
          />
        ))}
      </nav>
      <div className="person-text">
        <span className="mobile-subtitle2">{person.role}</span>
        <span className="mobile-subtitle1">{person.name}</span>
        <p className="mobile-body-text">{person.bio}</p>
      </div>
    </section>
  );
};

export default Person;
