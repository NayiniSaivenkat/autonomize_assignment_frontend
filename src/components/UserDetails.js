import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <img src={user.avatar_url} alt={user.username} style={{height:"20vh",width:"15vw"}}/>
      
      <div >
      <h2>{user.name}</h2>
      
      </div>
      
      
    </div>
  );
};

export default UserDetails;
