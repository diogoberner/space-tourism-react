import Tech from "../../components/Tech/Tech";
import "./Technology.css";
import technology from "../../assets/tech.json";

const Technology = () => {
  return (
    <div className="technology">
      <Tech tech={technology} />
    </div>
  );
};

export default Technology;
