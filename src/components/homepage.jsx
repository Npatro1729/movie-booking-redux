import Movies from "./movies-recomended";
import MovieSlider from "./movie-slider";
import { useNavigate } from "react-router-dom";

const Homepage = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Do NOT re-declare Navbar here; App already renders it */}
      <div style={{ margin: "20px 0", padding: "0 40px" }}>
        <button onClick={() => navigate("/latest")} style={buttonStyle}>Latest Movies</button>
        <button onClick={() => navigate("/upcoming")} style={{ ...buttonStyle, backgroundColor: "#2196F3" }}>Upcoming Movies</button>
        <button onClick={() => navigate("/events")} style={{ ...buttonStyle, backgroundColor: "#FF5722" }}>Nearby Events</button>
      </div>

      <MovieSlider />
      <Movies searchTerm={searchTerm} />
    </div>
  );
};

const buttonStyle = {
  padding: "15px 30px",
  fontSize: "18px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "20px",
};

export default Homepage;
