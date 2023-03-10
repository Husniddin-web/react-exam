import axios from "axios";
const Base_URL = " https://api.github.com/users/sas";
export const api = {
  getUser: async (user_name) => {
    let data = await axios.get(`https://api.github.com/users/${user_name}`);
    return data;
  },
  getFollower: async (userName) => {
    let data = await axios.get(
      `https://api.github.com/users/${userName}/followers`
    );
    return data;
  },
  getRepos: async (user) => {
    let data = await axios.get(`https://api.github.com/users/${user}/repos`);
    return data;
  },
  getSearch: async (user_name) => {
    let data = await axios.get(
      `https://api.github.com/search/users?q=${user_name}`
    );
    return data;
  },
};
