import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isRegister, setIsRegister] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log("Register:", formData);
    } else {
      console.log("Login:", formData);
    }
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const styles = {
    wrapper: {
      height: "100vh",
      backgroundColor: "#f9fafc", // page background
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#2e3a59",
      flexDirection: "column",
      padding: "20px",
    },
    logo: {
      height: 130,
      marginBottom: 30,
      objectFit: "contain",
      filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
      userSelect: "none",
    },
    title: {
      fontWeight: "600",
      fontSize: 26,
      marginBottom: 28,
      userSelect: "none",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      width: 400,  // wider input width
      maxWidth: "100%",
    },
    input: {
      padding: "12px 16px",
      fontSize: 16,
      borderRadius: 7,
      border: "1.5px solid #cbd2d9",
      outline: "none",
      transition: "border-color 0.25s ease",
      backgroundColor: "#fff",
      boxSizing: "border-box",
      width: "100%",
    },
    inputFocused: {
      borderColor: "#3b82f6",
      backgroundColor: "#f0f6ff",
      boxShadow: "0 0 5px rgba(59,130,246,0.3)",
    },
    button: {
      padding: "14px 0",
      borderRadius: 8,
      border: "none",
      backgroundColor: "#3b82f6",
      color: "#fff",
      fontWeight: "600",
      fontSize: 17,
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      userSelect: "none",
      width: "100%",
    },
    buttonHover: {
      backgroundColor: "#2563eb",
    },
    toggleText: {
      marginTop: 25,
      fontSize: 15,
      color: "#4b5563",
      userSelect: "none",
      textAlign: "center",
    },
    toggleButton: {
      background: "none",
      border: "none",
      color: "#3b82f6",
      cursor: "pointer",
      textDecoration: "underline",
      fontSize: 15,
      fontWeight: 600,
      marginLeft: 6,
      userSelect: "none",
    },
  };

  return (
    <div style={styles.wrapper}>
      <img
        src="/images/pharmatrust_logo.jpg"
        alt="Logo"
        style={styles.logo}
      />
      <h2 style={styles.title}>
        {isRegister ? "Create an Account" : "Login to Your Account"}
      </h2>
      <form
        onSubmit={handleSubmit}
        style={styles.form}
        noValidate
        autoComplete="off"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          required
          style={{
            ...styles.input,
            ...(focused === "email" ? styles.inputFocused : {}),
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          onFocus={() => setFocused("password")}
          onBlur={() => setFocused(null)}
          required
          style={{
            ...styles.input,
            ...(focused === "password" ? styles.inputFocused : {}),
          }}
        />
        {isRegister && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            onFocus={() => setFocused("confirmPassword")}
            onBlur={() => setFocused(null)}
            required
            style={{
              ...styles.input,
              ...(focused === "confirmPassword"
                ? styles.inputFocused
                : {}),
            }}
          />
        )}
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      <p style={styles.toggleText}>
        {isRegister ? "Already have an account?" : "Don't have an account?"}
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
