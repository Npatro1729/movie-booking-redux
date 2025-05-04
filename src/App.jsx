import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Movies from "../src/components/movies-recomended"
import MovieBooking from "../src/components/movie-booking"
import ConfirmationPage from "../src/components/confirmation-page"

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/latest" element={<Movies />} />
    <Route path="/upcoming" element={<Movies />} />
    <Route path="/movieBooking/:title" element={<MovieBooking />} />
    <Route path="/confirmation/:title" element={<ConfirmationPage />} />
  </Routes>
  </Router>
  
  );

  
}

export default App;
