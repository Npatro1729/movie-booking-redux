import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
import { Link } from "react-router-dom";

const MovieRecomended = ({ searchTerm = "" }) => {
    const dispatch = useDispatch();
    const { movieData, isloading } = useSelector((state) => state.movies);
  
    useEffect(() => {
      dispatch(getMovies());
    }, [dispatch]);
  
    if (isloading) return <p>Loading…</p>;
  
    const filteredMovies = movieData.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} style={cardStyle}>
              <img
                src={movie.image}
                alt={movie.title}
                style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
              />
              <p><strong>{movie.title}</strong> ({movie.year})</p>
              <p>{movie.genre} • ⭐{movie.rating}</p>
              <button style={{ ...buttonStyle, backgroundColor: "#87CEEB" }}><Link to={`/movieBooking/${movie.title}`}>BOOK NOW</Link></button>
            </div>
          ))
        ) : (
          <p>No movies found for "{searchTerm}"</p>
        )}
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

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "16px",
  margin: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  width: "250px",
  backgroundColor: "#f9f9f9",
};

export default MovieRecomended;
