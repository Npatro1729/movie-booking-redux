import { useParams, useLocation, Link } from "react-router-dom";

const ConfirmationPage = () => {
    const { title } = useParams();
    const location = useLocation();
    const bookingDetails = location.state || {};

    const {
        name = "Guest",
        email = "N/A",
        selectedTime = "N/A",
        seats = 0,
        totalPrice = 0
    } = bookingDetails;

    return (
        <div style={{ padding: "30px", textAlign: "center", fontFamily: "Arial" }}>
            <h2 style={{ color: "green" }}>🎉 Booking Confirmed!</h2>
            <p><strong>Movie:</strong> {title}</p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Showtime:</strong> {selectedTime}</p>
            <p><strong>Seats:</strong> {seats}</p>
            <p><strong>Total Paid:</strong> ₹{totalPrice}</p>

            <Link to="/" style={{ marginTop: "20px", display: "inline-block", textDecoration: "none", backgroundColor: "#007BFF", color: "#fff", padding: "10px 20px", borderRadius: "5px" }}>
                Back to Home
            </Link>
        </div>
    );
};

export default ConfirmationPage;
