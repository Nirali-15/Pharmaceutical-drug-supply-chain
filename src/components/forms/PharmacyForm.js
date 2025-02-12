import React, { useState } from "react";

const PharmacyVerification = () => {
  const [showPharmacyForm, setShowPharmacyForm] = useState(false);
  const [verified, setVerified] = useState(false);
  
  const [pharmacyData, setPharmacyData] = useState({
    pharmacyName: "",
    pharmacyLicenseNumber: "",
    taxIdentificationNumber: "",
    gdpCertificationNumber: "",
    registeredBusinessAddress: "",
    officialEmailAddress: "",
    officialContactNumber: "",
    licenseUpload: ""
  });

  const handlePharmacyChange = (e) => {
    setPharmacyData({ ...pharmacyData, [e.target.name]: e.target.value });
  };

  const handlePharmacySubmit = (e) => {
    e.preventDefault();
    setVerified(true);
    setShowPharmacyForm(false);
  };

  return (
    <div style={{
      width: "60%",
      margin: "50px auto",
      padding: "30px",
      backgroundColor: "#ffffff",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: "12px",
      textAlign: "center",
      fontFamily: "'Arial', sans-serif",
      transition: "all 0.3s ease-in-out"
    }}>
      {!showPharmacyForm && !verified && (
        <button onClick={() => setShowPharmacyForm(true)} style={{
          padding: "14px 24px",
          backgroundColor: "#3E5879",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "0.3s",
        }}>
          Verify Pharmacy
        </button>
      )}

      {showPharmacyForm && (
        <form onSubmit={handlePharmacySubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          padding: "25px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
          marginTop: "20px"
        }}>
          <h2 style={{ color: "#213555" }}>Pharmacy Verification</h2>
          {Object.keys(pharmacyData).map((key) => (
            <input key={key}
              type={key.includes("Upload") ? "file" : "text"}
              name={key}
              placeholder={key.replace(/([A-Z])/g, " $1").trim()}
              onChange={handlePharmacyChange}
              required
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "16px",
                width: "100%",
                transition: "0.3s ease-in-out",
              }}
            />
          ))}
          <button type="submit" style={{
            padding: "14px 24px",
            backgroundColor: "#3E5879",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            transition: "0.3s",
          }}>
            Submit Pharmacy Data
          </button>
        </form>
      )}

      {verified && (
        <div style={{
          padding: "20px",
          backgroundColor: "#D8C4B6",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
          ✅ Pharmacy Verified Successfully!
        </div>
      )}
    </div>
  );
};

export default PharmacyVerification;
