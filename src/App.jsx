import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Movies from "../src/components/movies-recomended";
import MovieBooking from "../src/components/movie-booking";
import ConfirmationPage from "../src/components/confirmation-page";
import Events from "./components/nearby-events";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
      <Route path="/" element={<Homepage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />

        <Route path="/latest" element={<Movies searchTerm={searchTerm} />} />
        <Route path="/upcoming" element={<Movies searchTerm={searchTerm} />} />
        <Route path="/events" element={<Events />} />
        <Route path="/movieBooking/:title" element={<MovieBooking />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
