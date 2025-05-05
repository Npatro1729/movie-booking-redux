import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;

  useEffect(() => {
    if (!booking) {
      navigate("/"); // Redirect if accessed directly without data
    }
  }, [booking, navigate]);

  if (!booking) return null;

  const getQRCodeData = () => {
    return JSON.stringify({
      movie: booking.movieTitle,
      seats: booking.seats,
      dateTime: booking.dateTime,
      amount: booking.totalAmount,
    });
  };

  return (
    <section style={{ maxWidth: "700px", margin: "2rem auto", padding: "2rem", backgroundColor: "#e6ffe6", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32" }}>✅ Booking Confirmed!</h2>
      <p><strong>Movie:</strong> {booking.movieTitle}</p>
      <p><strong>Show Time:</strong> {new Date(booking.dateTime).toLocaleString()}</p>
      <p><strong>Seats:</strong> {booking.seats.join(", ")}</p>
      <p><strong>Total Paid:</strong> ₹{booking.totalAmount}</p>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <h4>🎫 Scan QR Code for Entry</h4>
        <div style={{ backgroundColor: "white", display: "inline-block", padding: "10px", borderRadius: "5px" }}>
          <QRCodeSVG
            value={getQRCodeData()}
            size={180}
            level="H"
            includeMargin
          />
        </div>
        <p style={{ fontSize: "12px", color: "#555", marginTop: "0.5rem" }}>
          Please show this QR at the cinema entrance
        </p>
      </div>
      <Link to="/" style={{ marginTop: "20px", display: "inline-block", textDecoration: "none", backgroundColor: "#007BFF", color: "#fff", padding: "10px 20px", borderRadius: "5px" }}>Back to Home</Link>
    </section>
  );
};

export default BookingConfirmation;
