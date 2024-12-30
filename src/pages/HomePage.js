import React, { useState, useEffect } from "react";
import UserInput from "../components/UserInput";
import UserDetails from "../components/UserDetails";
import RepositoryList from "../components/RepositoryList";
import FollowersList from "../components/FollowersList";
import { fetchGitHubUser, fetchRepositories, fetchFollowers } from "../api";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    // Check if data is available in localStorage on initial load
    const storedUser = localStorage.getItem("user");
    const storedRepositories = localStorage.getItem("repositories");
    const storedFollowers = localStorage.getItem("followers");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedRepositories) setRepositories(JSON.parse(storedRepositories));
    if (storedFollowers) setFollowers(JSON.parse(storedFollowers));
  }, []);

  const handleSearch = async (username) => {
    const userData = await fetchGitHubUser(username);
    const repoData = await fetchRepositories(username);
    setUser(userData);
    setRepositories(repoData);
    setFollowers([]); // Clear previous followers
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("repositories", JSON.stringify(repoData));
    localStorage.setItem("followers", JSON.stringify([]));
  };

  const handleFollowersClick = async (username) => {
    const followerData = await fetchFollowers(username);
    setFollowers(followerData);
    localStorage.setItem("followers", JSON.stringify(followerData));
  };

  return (
    <div>
      <UserInput onSubmit={handleSearch} />
      {user && <UserDetails user={user} />}
      {repositories.length > 0 && (
        <div>
          <h1>Repositories:</h1>
          <RepositoryList repositories={repositories} />
        </div>
      )}
      {user && (
        <button
          onClick={() => handleFollowersClick(user.login)}
          style={{ marginLeft: "10vw", marginBottom: "2rem" }}
        >
          View Followers
        </button>
      )}
      {followers.length > 0 && (
        <div>
          <h1>Followers:</h1>
          <FollowersList followers={followers} />
        </div>
      )}
    </div>
  );
};

export default HomePage;

