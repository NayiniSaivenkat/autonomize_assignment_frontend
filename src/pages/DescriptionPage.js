import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DescriptionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const repo = location.state?.repo;
  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1); // Go to the previous page if possible
    } else {
      navigate("/"); // Fallback: Go to the homepage or repositories list
    }
  };
  if (!repo) {
    return <p>Repository details not available.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleGoBack} style={{ marginBottom: "20px" }}>
        Go Back
      </button>
      <h1>{repo.name}</h1>
      <p><strong>Description:</strong> {repo.description || "No description provided."}</p>
      <p><strong>Language:</strong> {repo.language || "Unknown"}</p>
      <p><strong>Stars:</strong> {repo.stargazers_count}</p>
      <p><strong>Forks:</strong> {repo.forks_count}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default DescriptionPage;
