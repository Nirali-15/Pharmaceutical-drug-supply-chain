import React, { useState } from "react";

const DistributorVerification = () => {
  const [showDistributorForm, setShowDistributorForm] = useState(false);
  const [verified, setVerified] = useState(false);
  const [drugVerification, setDrugVerification] = useState(false);
  const [showDrugForm, setShowDrugForm] = useState(false);

  const [distributorData, setDistributorData] = useState({
    distributorName: "",
    companyRegistrationNumber: "",
    distributionLicenseNumber: "",
    taxIdentificationNumber: "",
    authorizedDrugDistributionCertification: "",
    warehouseAddress: "",
    officialEmailAddress: "",
    officialContactNumber: ""
  });

  const [drugData, setDrugData] = useState({
    drugName: "",
    batchNumber: "",
    quantitySupplied: "",
    shippingDate: "",
    transportCompanyName: "",
    trackingNumber: "",
    destinationPharmacy: "",
    deliveryStatus: ""
  });

  const handleDistributorChange = (e) => {
    setDistributorData({ ...distributorData, [e.target.name]: e.target.value });
  };

  const handleDrugChange = (e) => {
    setDrugData({ ...drugData, [e.target.name]: e.target.value });
  };

  const handleDistributorSubmit = (e) => {
    e.preventDefault();
    setVerified(true);
    setShowDistributorForm(false);
  };

  const handleDrugSubmit = (e) => {
    e.preventDefault();
    setDrugVerification(true);
  };

  const buttonDynamicStyle = {
    padding: "16px 40px",
    background: "linear-gradient(90deg, #4ea9df, #228ebe)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 8px 15px rgba(72, 113, 247, 0.3)",
    transition: "all 0.3s ease",
    display: "inline-block",
  };

  const containerStyle = {
    width: "60%",
    maxWidth: "700px",
    margin: "50px auto",
    padding: showDistributorForm || verified || showDrugForm ? "30px 40px" : "0",
    backgroundColor: showDistributorForm || verified || showDrugForm ? "#fff" : "transparent",
    boxShadow: showDistributorForm || verified || showDrugForm ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
    borderRadius: "12px",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
  };

  const inputStyle = {
    padding: "12px 15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
    transition: "border-color 0.3s ease",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "25px",
    backgroundColor: "#f9f9f9",
    padding: "25px 30px",
    borderRadius: "10px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  };

  const verifiedBoxStyle = {
    padding: "20px 25px",
    backgroundColor: "#D8C4B6",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "25px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div style={containerStyle}>
      {!showDistributorForm && !verified && (
        <>
          <img
            src="/images/pharmatrust_logo.jpg"
            alt="Distributor Logo"
            style={{
              width: "180px",
              marginBottom: "20px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <button
            onClick={() => setShowDistributorForm(true)}
            style={buttonDynamicStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #228ebe, #4ea9df)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #4ea9df, #228ebe)")
            }
          >
            Verify Distributor
          </button>
        </>
      )}

      {showDistributorForm && (
        <form onSubmit={handleDistributorSubmit} style={formStyle}>
          <h2 style={{ color: "#213555", marginBottom: "15px" }}>
            Distributor Verification
          </h2>
          {Object.keys(distributorData).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key.replace(/([A-Z])/g, " $1").trim()}
              value={distributorData[key]}
              onChange={handleDistributorChange}
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#3E5879")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          ))}
          <button
            type="submit"
            style={{
              ...buttonDynamicStyle,
              width: "100%",
              borderRadius: "8px",
              fontSize: "18px",
              boxShadow: "none",
              minWidth: "unset",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #228ebe, #4ea9df)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #4ea9df, #228ebe)")
            }
          >
            Submit Distributor Data
          </button>
        </form>
      )}

      {verified && (
        <div style={verifiedBoxStyle}>
          ✅ Distributor Verified Successfully!
          <br />
          <button
            onClick={() => setShowDrugForm(true)}
            style={buttonDynamicStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #228ebe, #4ea9df)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #4ea9df, #228ebe)")
            }
          >
            Proceed to Drug Verification
          </button>
        </div>
      )}

      {showDrugForm && !drugVerification && (
        <form onSubmit={handleDrugSubmit} style={formStyle}>
          <h2 style={{ color: "#213555", marginBottom: "15px" }}>
            Drug Verification
          </h2>
          {Object.keys(drugData).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key.replace(/([A-Z])/g, " $1").trim()}
              value={drugData[key]}
              onChange={handleDrugChange}
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#3E5879")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          ))}
          <button
            type="submit"
            style={{
              ...buttonDynamicStyle,
              width: "100%",
              borderRadius: "8px",
              fontSize: "18px",
              boxShadow: "none",
              minWidth: "unset",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #228ebe, #4ea9df)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #4ea9df, #228ebe)")
            }
          >
            Submit Drug Data
          </button>
        </form>
      )}

      {drugVerification && (
        <div style={verifiedBoxStyle}>✅ Drug Verified Successfully!</div>
      )}
    </div>
  );
};

export default DistributorVerification;
