import React, { useEffect, useState } from "react";

const movies = [
  {
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    title: "Forrest Gump",
    image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
  },
  {
    title: "The Shawshank Redemption",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
];

const MovieSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 3000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{
        width: "500px",
        margin: "20px auto",
        textAlign: "center",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        overflow: "hidden",
        backgroundColor: "#f9f9f9",
      }}
    >
      <img
        src={movies[index].image}
        alt={movies[index].title}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      <h3 style={{ padding: "12px 0", margin: 0 }}>{movies[index].title}</h3>
    </div>
  );
};

export default MovieSlider;
