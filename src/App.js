// pages
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

//components
import Navbar from "./components/Navbar/Navbar";

//react-router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination" element={<Destination />} />
        <Route exact path="/crew" element={<Crew />} />
        <Route exact path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
