import React from 'react'
import image from "../assets/GitHub-logo.png"
const Card = ({ name, description,onClick }) => {
    return (
      <div  onClick={onClick} style={{ width: "30vw", border: "2px solid black", margin: "2px", display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px" }}>
        <img src={image} alt="GitHub Logo" style={{ width: "50px", height: "50px" }} />
        <div style={{maxWidth:"40%"}}>
          <p style={{ margin: "0", fontSize: "1.2rem",fontWeight:"bold",wordWrap: "break-word",
            overflow: "hidden",
            textOverflow: "ellipsis", }}>{name}</p>
          <p style={{ margin: "0.5rem 0 0 0", fontSize: "1rem" }}>{description}</p>
        </div>
      </div>
    );
  };

export default Card