import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (email) {
      setNotification(`You will receive updates on newsletters to ${email}`);
      setTimeout(() => setNotification(""), 5000);
    } else {
      setNotification("Please enter a valid email address.");
      setTimeout(() => setNotification(""), 5000);
    }
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#f5efe7", color: "#213555" }}>
      {/* Updated Banner Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 40px",
          backgroundImage: "linear-gradient(to right, #3e5879, #d8c4b6)",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          color: "#ffffff",
          textAlign: "center",
          minHeight: "400px", // Increased height
        }}
      >
        <div style={{ flex: 1, marginRight: "20px" }}>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "20px", textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)" }}>
            Welcome to PharmaTrust
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", marginBottom: "30px", lineHeight: "1.8" }}>
            Your trusted partner for authentic and traceable pharmaceutical solutions. Join us in ensuring the
            authenticity and safety of medicines with cutting-edge technology.
          </p>
          <button
            onClick={() => navigate("/about")}
            style={{
              padding: "12px 20px",
              backgroundColor: "#213555",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Learn More
            
          </button>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src="/images/home3.jpg"
            alt="Pharmaceutical solutions"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(96, 89, 89, 0.3)",
            }}
          />
        </div>
      </div>

      {notification && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#3E5879",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "1rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          {notification}
        </div>
      )}

      {/* About Section */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "15px", color: "#3E5879" }}>About Us</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", fontSize: "1.2rem" }}>
          We are dedicated to revolutionizing the pharmaceutical supply chain by leveraging technology to ensure
          the authenticity, traceability, and safety of medicines.
        </p>
      </section>

      {/* Role Selection Section */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#3E5879" }}>Select Your Role to Proceed</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          {[
            { title: "Manufacturer", imgSrc: "/images/manufacturer1.jpg", path: "/manufacturer" },
            { title: "Distributor", imgSrc: "/images/distributor1.jpg", path: "/distributor" },
            { title: "Pharmacy", imgSrc: "/images/pharma4.jpg", path: "/pharmacy" },
            { title: "User", imgSrc: "/images/consumer 1.jpg", path: "/user" },
          ].map((role, index) => (
            <div
              key={index}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                textAlign: "center",
                padding: "15px",
              }}
            >
              <img
                src={role.imgSrc}
                alt={role.title}
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px" }}
              />
              <h3 style={{ margin: "15px 0", color: "#213555" }}>{role.title}</h3>
              <button
                onClick={() => navigate(role.path)}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#3E5879",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
              >
                Proceed
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: "50px 20px", textAlign: "center", backgroundColor: "#d8c4b6", marginTop: "50px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "15px", color: "#3E5879" }}>Subscribe to Our Newsletter</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          Stay updated with the latest news and updates in the pharmaceutical industry.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "1px solid #3E5879",
              width: "300px",
            }}
          />
          <button
            onClick={handleSubscribe}
            style={{
              padding: "10px 15px",
              backgroundColor: "#3E5879",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          >
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
