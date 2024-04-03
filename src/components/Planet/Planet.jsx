import "./Planet.css";
import moon from "../../assets/destination/image-moon.png";

const Planet = () => {
  return (
    <>
      <div className="img-container">
        <img src={moon} alt="moon" />
      </div>
      <div className="planet-info-wrapper"></div>
    </>
  );
};

export default Planet;
