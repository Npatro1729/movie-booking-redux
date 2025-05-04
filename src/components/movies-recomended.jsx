import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../redux/actions";
import { Link } from "react-router-dom";

const MovieRecomended = () => {
  const dispatch = useDispatch();
  const { movieData, isloading } = useSelector((state) => state.movies);
  

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    console.log("Redux state movieData:", movieData);  // Log the movie data
  }, [movieData]);

  if (isloading) return <p>Loading…</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {movieData.map((movie) => (
        <div key={movie.id} style={cardStyle}>
          <img
            src={movie.image}
            alt={movie.title}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
          />
          <p><strong>{movie.title}</strong> ({movie.year})</p>
          <p>{movie.genre} • ⭐{movie.rating}</p>
          <button> <Link to={`/movieBooking/${movie.title}`}>Go to moviebooking</Link></button>
        </div>
      ))}
    </div>
  );
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
