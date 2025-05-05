import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  return (
    <div style={navbarStyle}>
      <h1 style={logoStyle}>🎬 Movie Palace</h1>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchBoxStyle}
        />
        <button style={homeButtonStyle} onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  );
};

const navbarStyle = {
  margin: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  backgroundColor: "#222",
  color: "white",
};

const logoStyle = {
  margin: 0,
  fontSize: "24px",
};

const searchBoxStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "300px",
};

const homeButtonStyle = {
  padding: "10px 16px",
  fontSize: "14px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Navbar;
