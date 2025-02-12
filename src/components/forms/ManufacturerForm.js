import React, { useState } from "react";

const ManufacturerVerification = () => {
  const [showManufacturerForm, setShowManufacturerForm] = useState(false);
  const [verified, setVerified] = useState(false);
  const [drugVerification, setDrugVerification] = useState(false);
  const [showDrugForm, setShowDrugForm] = useState(false);

  const [manufacturerData, setManufacturerData] = useState({
    manufacturerName: "",
    companyRegistrationNumber: "",
    manufacturingLicenseNumber: "",
    gmpCertificationNumber: "",
    drugRegulatoryApprovalNumber: "",
    taxIdentificationNumber: "",
    importExportCode: "",
    registeredCorporateAddress: "",
    officialEmailAddress: "",
    officialContactNumber: "",
    gmpCertificateUpload: ""
  });

  const [drugData, setDrugData] = useState({
    drugName: "",
    drugCode: "",
    batchNumber: "",
    manufacturingDate: "",
    expiryDate: "",
    composition: "",
    manufacturerName: "",
    regulatoryApprovalNumber: "",
    qrCode: "",
    barcode: "",
    lastVerifiedCheckpoint: "",
    certificateOfAnalysis: ""
  });

  const handleManufacturerChange = (e) => {
    setManufacturerData({ ...manufacturerData, [e.target.name]: e.target.value });
  };

  const handleDrugChange = (e) => {
    setDrugData({ ...drugData, [e.target.name]: e.target.value });
  };

  const handleManufacturerSubmit = (e) => {
    e.preventDefault();
    setVerified(true);
    setShowManufacturerForm(false);
  };

  const handleDrugSubmit = (e) => {
    e.preventDefault();
    setDrugVerification(true);
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
      
      {!showManufacturerForm && !verified && (
        <button onClick={() => setShowManufacturerForm(true)} style={{
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
          Verify Manufacturer
        </button>
      )}

      {showManufacturerForm && (
        <form onSubmit={handleManufacturerSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          padding: "25px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
          marginTop: "20px"
        }}>
          <h2 style={{ color: "#213555" }}>Manufacturer Verification</h2>
          {Object.keys(manufacturerData).map((key) => (
            <input key={key}
              type={key.includes("Upload") ? "file" : "text"}
              name={key}
              placeholder={key.replace(/([A-Z])/g, " $1").trim()}
              onChange={handleManufacturerChange}
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
            Submit Manufacturer Data
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
          ✅ Manufacturer Verified Successfully!
          <br />
          <button onClick={() => setShowDrugForm(true)} style={{
            padding: "14px 24px",
            backgroundColor: "#3E5879",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "15px",
            transition: "0.3s",
          }}>
            Drug Verification
          </button>
        </div>
      )}

      {showDrugForm && !drugVerification && (
        <form onSubmit={handleDrugSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          padding: "25px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
          marginTop: "20px"
        }}>
          <h2 style={{ color: "#213555" }}>Drug Verification</h2>
          {Object.keys(drugData).map((key) => (
            <input key={key}
              type={key.includes("Upload") ? "file" : key.includes("Date") ? "date" : "text"}
              name={key}
              placeholder={key.replace(/([A-Z])/g, " $1").trim()}
              onChange={handleDrugChange}
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
            Submit Drug Data
          </button>
        </form>
      )}

      {drugVerification && (
        <div style={{
          padding: "20px",
          backgroundColor: "#D8C4B6",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
          ✅ Drug Verified Successfully!
        </div>
      )}
    </div>
  );
};

export default ManufacturerVerification;
