export const fetchGitHubUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json();
  };
  
  export const fetchRepositories = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    return response.json();
  };
  
  export const fetchFollowers = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/followers`);
    return response.json();
  };