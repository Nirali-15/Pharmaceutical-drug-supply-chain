import React, { useState } from "react";

const Support = () => {
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = () => {
    if (message.trim()) {
      setNotification("Your complaint has been submitted successfully.");
      setTimeout(() => setNotification(""), 5000);
      setMessage("");
    } else {
      setNotification("Please enter your complaint before submitting.");
      setTimeout(() => setNotification(""), 5000);
    }
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#f5efe7", color: "#213555", padding: "50px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#3E5879", marginBottom: "20px" }}>Support & Help</h1>
      
      {notification && (
        <div style={{ backgroundColor: "#3E5879", color: "white", padding: "10px", borderRadius: "5px", marginBottom: "20px" }}>
          {notification}
        </div>
      )}

      {/* Guide Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2rem", color: "#213555" }}>How to Use PharmaTrust</h2>
        <ul style={{ listStyleType: "none", padding: "0", maxWidth: "600px", margin: "20px auto", textAlign: "left", lineHeight: "1.6", fontSize: "1.2rem" }}>
          <li>🔹 <strong>Register/Login</strong> with your credentials.</li>
          <li>🔹 Choose your <strong>role</strong> (Manufacturer, Distributor, Pharmacy, or User).</li>
          <li>🔹 Fill out the <strong>registration form</strong> for your role.</li>
          <li>🔹 Navigate through the <strong>dashboard</strong> to track and manage pharmaceutical supplies.</li>
          <li>🔹 Contact support if you need <strong>further assistance</strong>.</li>
        </ul>
      </section>

      {/* Complaint Submission */}
      <section style={{ backgroundColor: "#d8c4b6", padding: "30px", borderRadius: "10px", maxWidth: "600px", margin: "auto", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px", color: "#3E5879" }}>Submit a Complaint</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your complaint here..."
          style={{ width: "100%", height: "100px", padding: "10px", fontSize: "1rem", borderRadius: "5px", border: "1px solid #3E5879", marginBottom: "15px" }}
        />
        <br />
        <button
          onClick={handleSubmit}
          style={{ padding: "10px 20px", backgroundColor: "#3E5879", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "1rem" }}
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default Support;
