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
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "40px",
        backgroundColor: "#f3f1eb",
        fontFamily: "'Arial', sans-serif",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div style={{ width: "60%", textAlign: "center" }}>
        {/* Logo + Verify button only if NOT showing form or verified */}
        {!showManufacturerForm && !verified && (
          <>
            <img
              src="/images/pharmatrust_logo.jpg"
              alt="PharmaTrust Logo"
              style={{ width: "180px", marginBottom: "20px", display: "block", marginLeft: "auto", marginRight: "auto" }}
            />
            <button
              onClick={() => setShowManufacturerForm(true)}
              style={{
                padding: "16px 40px",
                background: "linear-gradient(90deg, #4e73df, #224abe)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "20px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 8px 15px rgba(72, 113, 247, 0.3)",
                transition: "all 0.3s ease",
                display: "inline-block"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #224abe, #4e73df)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #4e73df, #224abe)")
              }
            >
              Verify Manufacturer
            </button>
          </>
        )}

        {/* Simple Manufacturer Form */}
        {showManufacturerForm && (
          <form onSubmit={handleManufacturerSubmit} style={{ marginTop: "30px", textAlign: "left" }}>
            <input
              type="text"
              name="manufacturerName"
              placeholder="Manufacturer Name"
              value={manufacturerData.manufacturerName}
              onChange={handleManufacturerChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="companyRegistrationNumber"
              placeholder="Company Registration Number"
              value={manufacturerData.companyRegistrationNumber}
              onChange={handleManufacturerChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="manufacturingLicenseNumber"
              placeholder="Manufacturing License Number"
              value={manufacturerData.manufacturingLicenseNumber}
              onChange={handleManufacturerChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="gmpCertificationNumber"
              placeholder="GMP Certification Number"
              value={manufacturerData.gmpCertificationNumber}
              onChange={handleManufacturerChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="drugRegulatoryApprovalNumber"
              placeholder="Drug Regulatory Approval Number"
              value={manufacturerData.drugRegulatoryApprovalNumber}
              onChange={handleManufacturerChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="taxIdentificationNumber"
              placeholder="Tax Identification Number"
              value={manufacturerData.taxIdentificationNumber}
              onChange={handleManufacturerChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="importExportCode"
              placeholder="Import Export Code"
              value={manufacturerData.importExportCode}
              onChange={handleManufacturerChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="registeredCorporateAddress"
              placeholder="Registered Corporate Address"
              value={manufacturerData.registeredCorporateAddress}
              onChange={handleManufacturerChange}
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="officialEmailAddress"
              placeholder="Official Email Address"
              value={manufacturerData.officialEmailAddress}
              onChange={handleManufacturerChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="officialContactNumber"
              placeholder="Official Contact Number"
              value={manufacturerData.officialContactNumber}
              onChange={handleManufacturerChange}
              required
              style={inputStyle}
            />
            <input
              type="file"
              name="gmpCertificateUpload"
              onChange={handleManufacturerChange}
              required
              style={{ marginTop: "12px", marginBottom: "20px" }}
            />

            <button
              type="submit"
              style={{
                padding: "14px 40px",
                backgroundColor: "#3E5879",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Submit Manufacturer Data
            </button>
          </form>
        )}

        {/* Verified message + Drug Verification button */}
        {verified && (
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "#D8C4B6",
                borderRadius: "12px",
                padding: "20px",
                fontSize: "18px",
                fontWeight: "bold",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                marginBottom: "20px",
              }}
            >
              ✅ Manufacturer Verified Successfully!
            </div>
            <button
              onClick={() => setShowDrugForm(true)}
              style={{
                padding: "16px 40px",
                backgroundColor: "#3E5879",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "0.3s",
              }}
            >
              Drug Verification
            </button>
          </div>
        )}

        {/* Drug Verification Form */}
        {showDrugForm && !drugVerification && (
          <form onSubmit={handleDrugSubmit} style={{ marginTop: "30px", textAlign: "left" }}>
            <input
              type="text"
              name="drugName"
              placeholder="Drug Name"
              value={drugData.drugName}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="drugCode"
              placeholder="Drug Code"
              value={drugData.drugCode}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="batchNumber"
              placeholder="Batch Number"
              value={drugData.batchNumber}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="date"
              name="manufacturingDate"
              placeholder="Manufacturing Date"
              value={drugData.manufacturingDate}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="date"
              name="expiryDate"
              placeholder="Expiry Date"
              value={drugData.expiryDate}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="composition"
              placeholder="Composition"
              value={drugData.composition}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="manufacturerName"
              placeholder="Manufacturer Name"
              value={drugData.manufacturerName}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="regulatoryApprovalNumber"
              placeholder="Regulatory Approval Number"
              value={drugData.regulatoryApprovalNumber}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="qrCode"
              placeholder="QR Code"
              value={drugData.qrCode}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="barcode"
              placeholder="Barcode"
              value={drugData.barcode}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="lastVerifiedCheckpoint"
              placeholder="Last Verified Checkpoint"
              value={drugData.lastVerifiedCheckpoint}
              onChange={handleDrugChange}
              required
              style={inputStyle}
            />
            <input
              type="file"
              name="certificateOfAnalysis"
              onChange={handleDrugChange}
              required
              style={{ marginTop: "12px", marginBottom: "20px" }}
            />

            <button
              type="submit"
              style={{
                padding: "14px 40px",
                backgroundColor: "#3E5879",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Submit Drug Data
            </button>
          </form>
        )}

        {/* Drug Verified message */}
        {drugVerification && (
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#D8C4B6",
              borderRadius: "12px",
              padding: "20px",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            ✅ Drug Verified Successfully!
          </div>
        )}
      </div>
    </div>
  );
};

// input styling for reuse
const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

export default ManufacturerVerification;
