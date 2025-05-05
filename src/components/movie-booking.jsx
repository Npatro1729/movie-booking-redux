import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { bookMovies } from "../redux/actions"

const MovieBooking = (props) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);

  if (!props.movieData || props.movieData.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading movie data...</p>;
  }

  const movie = props.movieData.find((m) => m.title === title);
  if (!movie) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Movie "{title}" not found.</p>;
  }

  const rate = 60;

  const getAvailableTimeSlots = () => {
    const slots = [];
    const now = new Date();
    for (let i = 0; i < 5; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() + i);
      ["10:00", "14:30", "18:00"].forEach((time) => {
        slots.push(`${date.toISOString().split("T")[0]}T${time}`);
      });
    }
    return slots;
  };

  const getAvailableSeats = () => {
    const seats = [];
    for (let row of ["A", "B", "C"]) {
      for (let i = 1; i <= 10; i++) {
        seats.push(`${row}${i}`);
      }
    }
    return seats;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      movieTitle: title,
      dateTime: selectedDateTime,
      seats: selectedSeats,
      totalAmount: selectedSeats.length * rate
    };
    await props.bookMovies(data);
    navigate("/confirmation", { state: data });
  };

  return (
    <section style={{
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "2rem",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ textAlign: "center", color: "#2c3e50" }}>🎬 Book Tickets for {title}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>
          <strong>Select Date & Time:</strong><br />
          <select
            value={selectedDateTime}
            onChange={(e) => setSelectedDateTime(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          >
            <option value="">--Select--</option>
            {getAvailableTimeSlots().map((slot) => (
              <option key={slot} value={slot}>
                {new Date(slot).toLocaleString()}
              </option>
            ))}
          </select>
        </label>

        <label>
          <strong>Select Seats:</strong><br />
          <select
            multiple
            value={selectedSeats}
            onChange={(e) => setSelectedSeats([...e.target.selectedOptions].map(o => o.value))}
            style={{ width: "100%", height: "120px", padding: "0.5rem" }}
          >
            {getAvailableSeats().map(seat => (
              <option key={seat} value={seat}>Seat {seat}</option>
            ))}
          </select>
          <small>Hold Ctrl (Windows) or Cmd (Mac) to select multiple seats</small>
        </label>

        <p><strong>Total Amount:</strong> ₹{selectedSeats.length * rate}</p>

        <button
          type="submit"
          disabled={!selectedDateTime || selectedSeats.length === 0}
          style={{
            padding: "0.75rem",
            backgroundColor: "#2980b9",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Confirm Booking
        </button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  movieData: state.movies.movieData
});

const mapDispatchToProps = {
  bookMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieBooking);
