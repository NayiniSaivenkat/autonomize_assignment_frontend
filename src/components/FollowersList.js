import React from "react";
import { useNavigate } from "react-router-dom";

const FollowersList = ({ followers }) => {
  const navigate = useNavigate();

  const handleFollowerClick = (username) => {
    navigate(`/followers/${username.login}`); // Navigate to FollowerPage
  };

  return (
    <ul>
      {followers.map((follower) => (
        <li
          key={follower.id}
          onClick={() => handleFollowerClick(follower)}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {follower.login}
        </li>
      ))}
    </ul>
  );
};

export default FollowersList;
