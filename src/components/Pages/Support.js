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

  const styles = {
    wrapper: {
      height: "100vh",
      backgroundColor: "#f9fafc", // same as login page
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#2e3a59",
      padding: "20px",
      boxSizing: "border-box",
      flexDirection: "column",
    },
    container: {
      backgroundColor: "#fff",
      borderRadius: 12,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "40px 50px",
      maxWidth: 600,
      width: "100%",
      textAlign: "center",
    },
    headingMain: {
      fontSize: 28,
      marginBottom: 24,
      color: "#3b82f6",
      userSelect: "none",
      fontWeight: 600,
    },
    notification: {
      backgroundColor: "#3b82f6",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: 6,
      marginBottom: 24,
      fontWeight: 500,
      userSelect: "none",
      boxShadow: "0 2px 6px rgba(59,130,246,0.4)",
    },
    guideSection: {
      marginBottom: 36,
      textAlign: "left",
    },
    guideHeading: {
      fontSize: 22,
      marginBottom: 16,
      color: "#2e3a59",
      fontWeight: 600,
      userSelect: "none",
    },
    guideList: {
      listStyleType: "none",
      paddingLeft: 0,
      lineHeight: 1.6,
      fontSize: 16,
      color: "#4b5563",
    },
    listItem: {
      marginBottom: 10,
      userSelect: "none",
    },
    complaintSection: {
      textAlign: "left",
    },
    complaintHeading: {
      fontSize: 22,
      marginBottom: 16,
      color: "#3b82f6",
      fontWeight: 600,
      userSelect: "none",
    },
    textarea: {
      width: "100%",
      height: 100,
      padding: "12px 14px",
      fontSize: 16,
      borderRadius: 8,
      border: "1.5px solid #3b82f6",
      resize: "vertical",
      boxSizing: "border-box",
      outline: "none",
      transition: "border-color 0.3s ease",
    },
    textareaFocus: {
      borderColor: "#2563eb",
      boxShadow: "0 0 6px rgba(37, 99, 235, 0.5)",
    },
    submitButton: {
      marginTop: 18,
      padding: "12px 0",
      width: "100%",
      backgroundColor: "#3b82f6",
      color: "#fff",
      fontSize: 17,
      fontWeight: 600,
      borderRadius: 8,
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      userSelect: "none",
    },
    submitButtonHover: {
      backgroundColor: "#2563eb",
    },
  };

  // local state to handle textarea focus
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.headingMain}>Support & Help</h1>

        {notification && <div style={styles.notification}>{notification}</div>}

        {/* Guide Section */}
        <section style={styles.guideSection}>
          <h2 style={styles.guideHeading}>How to Use PharmaTrust</h2>
          <ul style={styles.guideList}>
            <li style={styles.listItem}>🔹 <strong>Register/Login</strong> with your credentials.</li>
            <li style={styles.listItem}>🔹 Choose your <strong>role</strong> (Manufacturer, Distributor, Pharmacy, or User).</li>
            <li style={styles.listItem}>🔹 Fill out the <strong>registration form</strong> for your role.</li>
            <li style={styles.listItem}>🔹 Navigate through the <strong>dashboard</strong> to track and manage pharmaceutical supplies.</li>
            <li style={styles.listItem}>🔹 Contact support if you need <strong>further assistance</strong>.</li>
          </ul>
        </section>

        {/* Complaint Submission */}
        <section style={styles.complaintSection}>
          <h2 style={styles.complaintHeading}>Submit a Complaint</h2>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your complaint here..."
            style={{
              ...styles.textarea,
              ...(isFocused ? styles.textareaFocus : {}),
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button
            onClick={handleSubmit}
            style={styles.submitButton}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.submitButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.submitButton.backgroundColor)}
          >
            Submit
          </button>
        </section>
      </div>
    </div>
  );
};

export default Support;
