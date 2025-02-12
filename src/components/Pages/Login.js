import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isRegister, setIsRegister] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log("Register Submitted", formData);
    } else {
      console.log("Login Submitted", formData);
    }
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#f5efe7",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    heading: {
      color: "#213555",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#3e5879",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#213555",
    },
    toggleButton: {
      backgroundColor: "transparent",
      border: "none",
      color: "#3e5879",
      cursor: "pointer",
      textDecoration: "underline",
      fontSize: "14px",
    },
    linkText: {
      color: "#213555",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={styles.input}
        />
        {isRegister && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
            style={styles.input}
          />
        )}
        <button type="submit" style={styles.button}>
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      <p style={styles.linkText}>
        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          type="button"
          style={styles.toggleButton}
          onClick={toggleForm}
        >
          {isRegister ? "Login here" : "Register here"}
        </button>
      </p>
    </div>
  );
};

export default Login;
