import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    drugName: "",
    batchNumber: "",
    drugCode: "",
    qrCode: "",
  });

  const [verified, setVerified] = useState(false);
  const [drugDetails, setDrugDetails] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVerified(true);
    setDrugDetails({
      manufacturerName: "XYZ Pharma Ltd.",
      manufacturingDate: "2024-01-10",
      expiryDate: "2026-01-10",
      regulatoryApprovalNumber: "FDA-123456",
      distributorName: "ABC Distributors",
      warehouseDetails: "Cold Storage Facility, Unit 5",
      pharmacyName: "HealthPlus Pharmacy",
      transactionHistory: [
        "2024-01-12: Shipped from Manufacturer",
        "2024-01-14: Arrived at Distributor Warehouse",
        "2024-01-18: Delivered to HealthPlus Pharmacy",
      ],
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Drug Verification</h2>
      {!verified ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" name="drugName" placeholder="Drug Name" onChange={handleChange} required style={styles.input} />
          <input type="text" name="batchNumber" placeholder="Batch Number / Lot Number" onChange={handleChange} required style={styles.input} />
          <input type="text" name="drugCode" placeholder="Drug Code / NDC" onChange={handleChange} required style={styles.input} />
          <input type="text" name="qrCode" placeholder="QR Code / RFID Scan (Optional)" onChange={handleChange} style={styles.input} />
          <button type="submit" style={styles.button}>Verify</button>
        </form>
      ) : (
        <div style={styles.detailsContainer}>
          <h3 style={styles.subheading}>Drug Verified Successfully! ✅</h3>
          <p><strong>Manufacturer Name:</strong> {drugDetails.manufacturerName}</p>
          <p><strong>Manufacturing Date:</strong> {drugDetails.manufacturingDate}</p>
          <p><strong>Expiry Date:</strong> {drugDetails.expiryDate}</p>
          <p><strong>Regulatory Approval Number:</strong> {drugDetails.regulatoryApprovalNumber}</p>
          <p><strong>Distributor Name:</strong> {drugDetails.distributorName}</p>
          <p><strong>Warehouse Details:</strong> {drugDetails.warehouseDetails}</p>
          <p><strong>Pharmacy / Retailer Name:</strong> {drugDetails.pharmacyName}</p>
          <p><strong>Transaction History:</strong></p>
          <ul>
            {drugDetails.transactionHistory.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#213555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#3E5879",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
  detailsContainer: {
    textAlign: "left",
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
  },
  subheading: {
    color: "#28a745",
    textAlign: "center",
  },
};

export default UserForm;
