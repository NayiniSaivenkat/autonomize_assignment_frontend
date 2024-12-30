import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const RepositoryList = ({ repositories, onSelectRepo }) => {
  const navigate = useNavigate();

  const handleClick = (repo) => {
    navigate(`/description/${repo.id}`, { state: { repo } });
  };
  return (

    <div style={{display:"flex",flexWrap:"wrap",justifyContent: "center", // Center-align cards in the container
    gap: "10px", // Space between rows and columns
    padding: "10px",}}>
      {repositories.map((repo)=>(
        <Card key={repo.id} name={repo.name} description={repo.description} onClick={() => handleClick(repo)}/>
      ))}

    </div>


    
  );
};

export default RepositoryList;