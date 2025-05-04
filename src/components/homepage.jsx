import Movies from "./movies-recomended";
import MovieSlider from "./movie-slider";
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>MOVIE PALACE</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "20px 0",
            padding: "0 40px",
          }}
        >
          <button
            onClick={() => navigate("/latest")}
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Latest Movies
          </button>

          <button
            onClick={() => navigate("/upcoming")}
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Upcoming Movies
          </button>

          <button
            onClick={() => navigate("/events")}
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              backgroundColor: "#FF5722",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Nearby Events
          </button>
        </div>
        <MovieSlider></MovieSlider>
        <Movies></Movies>
      </div>
    </div>
  );
};

export default Homepage;
