// pages
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

// components
import Navbar from "./components/Navbar/Navbar";

// react-router
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./AppBackground.css"; // Importe o arquivo CSS

function App() {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  const appBackgroundClass = getClassForRoute(currentRoute);

  return (
    <div
      className={`App ${appBackgroundClass}`}
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
      }}
    >
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

function getClassForRoute(route) {
  switch (route) {
    case "/":
      return "home-bg";
    case "/destination":
      return "destination-bg";
    case "/crew":
      return "crew-bg";
    case "/technology":
      return "technology-bg";
    default:
      return "";
  }
}

export default App;
