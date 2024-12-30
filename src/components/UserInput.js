import React, { useState } from "react";

const UserInput = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",marginBottom:"20px"}}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{marginRight:"5px"}}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default UserInput;