import React from "react";

const events = [
    {
      title: "Rock Music Festival",
      date: "2025-05-10",
      location: "City Park, Mumbai",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    },
    {
      title: "Stand-up Comedy Night",
      date: "2025-05-12",
      location: "Laugh Lounge, Delhi",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19",
    },
    {
      title: "Food Carnival",
      date: "2025-05-14",
      location: "Town Square, Bengaluru",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
  ];

const NearbyEvents = () => {
  return (
    <section style={{
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#2c3e50" }}>
        🎉 Nearby Events & Shows
      </h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2rem"
      }}>
        {events.map((event, index) => (
          <div key={index} style={{
            width: "280px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            textAlign: "center"
          }}>
            <img
              src={event.image}
              alt={event.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ margin: "0.5rem 0", color: "#34495e" }}>{event.title}</h3>
              <p style={{ margin: "0.25rem 0", color: "#555" }}>
                📅 {new Date(event.date).toLocaleDateString()}
              </p>
              <p style={{ margin: "0.25rem 0", color: "#777" }}>
                📍 {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NearbyEvents;
