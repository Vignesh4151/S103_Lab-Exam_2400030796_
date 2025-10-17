// UserCard.js
import React from "react";

function UserCard(props) {
  const { name, age, bio } = props;

  const cardStyle = {
    border: "2px solid #ccc",
    borderRadius: "12px",
    padding: "20px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif"
  };

  const nameStyle = { fontSize: "1.5em", fontWeight: "bold", color: "#333" };
  const ageStyle = { color: "#555", margin: "5px 0" };
  const bioStyle = { color: "#777", fontStyle: "italic" };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p style={ageStyle}>Age: {age}</p>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
}

export default UserCard;
