import React from "react";
import "../styles/styles.css"; // Import the styles

const RoleBox = ({ title, onClick }) => {
  return (
    <div className="role-box" onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default RoleBox;
