import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";


const MovieBooking = (props) => {
  const { title } = useParams();
  const navigate = useNavigate();

  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seats, setSeats] = useState(1);

  const seatPrice = 60;
  const totalPrice = seats * seatPrice;

  const handleTimeSelect = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSeatsChange = (event) => {
    setSeats(parseInt(event.target.value));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!name || !email || !selectedTime || !seats) {
      alert("Please fill in all fields.");
      return;
    }
    
    alert(
      `Booking confirmed for ${name}\nTime: ${selectedTime}\nSeats: ${seats}\nTotal: ₹${totalPrice}`
    );
    navigate(`/confirmation/${title}`, {
        state: {
            name,
            email,
            selectedTime,
            seats,
            totalPrice
        }
    });
    
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#333" }}>Movie Booking Page</h2>
      <p>
        Select movie details for: <strong>{title}</strong>
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <label htmlFor="name" style={{ marginBottom: "5px" }}>
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />

        <label htmlFor="email" style={{ marginBottom: "5px" }}>
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />

        <label htmlFor="timeSlot" style={{ marginBottom: "5px" }}>
          Select a Time Slot:
        </label>
        <select
          id="timeSlot"
          value={selectedTime}
          onChange={handleTimeSelect}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        >
          <option value="">--Choose a Time Slot--</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="12:30 PM">12:30 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="6:30 PM">6:30 PM</option>
          <option value="9:00 PM">9:00 PM</option>
        </select>

        <label htmlFor="seats" style={{ marginBottom: "5px" }}>
          Number of Seats:
        </label>
        <select
          id="seats"
          value={seats}
          onChange={handleSeatsChange}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
          Total Price: ₹{totalPrice}
        </p>

        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Book Ticket
        </button>
      </form>
    </div>
  );
};

export default MovieBooking;
