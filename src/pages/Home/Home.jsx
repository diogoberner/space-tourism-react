//css
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="hero-wrapper">
        <h2 className="title5">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className="title1">SPACE</h1>
        <p className="body-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="button-wrapper">
        <div className="button-hover"></div>
        <Link to={"/destination"}>EXPLORE</Link>
      </div>
    </main>
  );
};

export default Home;
