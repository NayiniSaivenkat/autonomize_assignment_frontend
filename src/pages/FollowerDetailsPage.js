import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the username from the URL
import { fetchGitHubUser, fetchRepositories } from "../api";
import RepositoryList from "../components/RepositoryList";

const FollowerDetailsPage = () => {
    const { username } = useParams(); // Get the username from the URL
    const [user, setUser] = useState(null);
    const [repositories, setRepositories] = useState([]);
    console.log(username);
    useEffect(() => {
      const fetchData = async () => {
        // Fetch the user data and repositories of the selected follower
        const userData = await fetchGitHubUser(username);
        const repoData = await fetchRepositories(username);
        setUser(userData);
        setRepositories(repoData);
      };
  
      fetchData();
    }, [username]);
  
    if (!user) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <h1>{user.name}'s Repositories</h1>
        <RepositoryList repositories={repositories} />
      </div>
    );

};

export default FollowerDetailsPage;
