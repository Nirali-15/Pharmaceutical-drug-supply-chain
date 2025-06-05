import React, { useState } from "react";

const PharmacyVerification = () => {
  const [showPharmacyForm, setShowPharmacyForm] = useState(false);
  const [verified, setVerified] = useState(false);
  const [showDrugForm, setShowDrugForm] = useState(false);

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

  const [drugData, setDrugData] = useState({
    drugName: "",
    batchNumber: "",
    quantityReceived: "",
    receivedDateTime: "",
    supplierName: "",
    storageConditions: "",
    expiryDate: "",
    stockAvailable: "",
    dispensingRecord: ""
  });

  const handlePharmacyChange = (e) => {
    setPharmacyData({ ...pharmacyData, [e.target.name]: e.target.value });
  };

  const handleDrugChange = (e) => {
    setDrugData({ ...drugData, [e.target.name]: e.target.value });
  };

  const handlePharmacySubmit = (e) => {
    e.preventDefault();
    setVerified(true);
    setShowPharmacyForm(false);
  };

  const handleDrugSubmit = (e) => {
    e.preventDefault();
    setShowDrugForm(false);
    alert("Drug details submitted successfully!");
  };

  const buttonStyle = {
    padding: "15px 40px",
    backgroundColor: "#00A9FF",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "700",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0, 169, 255, 0.4)",
    transition: "all 0.3s ease",
    display: "block",
    margin: "20px auto",
    width: "auto",
    minWidth: "220px",
    textAlign: "center",
  };

  return (
    <div style={{ padding: "30px", textAlign: "center", fontFamily: "'Arial', sans-serif" }}>
      {!showPharmacyForm && !verified && (
        <>
          <img
            src="/images/pharmatrust_logo.jpg"
            alt="Pharmacy Logo"
            style={{ width: "120px", margin: "0 auto 20px", display: "block" }}
          />
          <button
            onClick={() => setShowPharmacyForm(true)}
            style={buttonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#007EC6")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00A9FF")}
          >
            Verify Pharmacy
          </button>
        </>
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
          maxWidth: "700px",
          margin: "20px auto"
        }}>
          <h2 style={{ color: "#213555" }}>Pharmacy Verification</h2>
          {Object.keys(pharmacyData).map((key) => (
            <input
              key={key}
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
                width: "100%"
              }}
            />
          ))}
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#007EC6")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00A9FF")}
          >
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

      {verified && !showDrugForm && (
        <button
          onClick={() => setShowDrugForm(true)}
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#007EC6")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00A9FF")}
        >
          Add Drug Details
        </button>
      )}

      {showDrugForm && (
        <form onSubmit={handleDrugSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          padding: "25px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
          maxWidth: "700px",
          margin: "20px auto"
        }}>
          <h2 style={{ color: "#213555" }}>Drug Details Updation</h2>
          {Object.keys(drugData).map((key) => (
            <input
              key={key}
              type={key === "licenseUpload" ? "file" : "text"}
              name={key}
              placeholder={key.replace(/([A-Z])/g, " $1").trim()}
              onChange={handleDrugChange}
              required
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "16px",
                width: "100%"
              }}
            />
          ))}
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#007EC6")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00A9FF")}
          >
            Submit Drug Details
          </button>
        </form>
      )}
    </div>
  );
};

export default PharmacyVerification;
