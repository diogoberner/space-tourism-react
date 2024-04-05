import "./Planet.css";

const Planet = ({ planet }) => {
  console.log(planet.img);
  // const planetImg = require(planet.img);
  return (
    <div className="planet-wrapper">
      <div className="img-container">
        <img src={require(`../../${planet.img}`)} alt={planet.title} />
      </div>
      <div className="planet-info-wrapper">
        <h2 className="title2">{planet.title}</h2>
        <p className="body-text planet-text">{planet.body}</p>
        <div className="travel-wrapper">
          <div className="dist-info">
            <span className="sub-title2">AVG. DISTANCE</span>
            <span className="sub-title1">{planet.avgDist}</span>
          </div>
          <div className="travel-info">
            <span className="sub-title2">EST. TRAVEL TIME</span>
            <span className="sub-title1">{planet.estTravelTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
