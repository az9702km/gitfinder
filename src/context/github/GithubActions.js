import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization : `token ${GITHUB_TOKEN}`}
})

const githubGet = (url, params) => github.get(url, {params: params})

// Search Users
export const searchUsers = async (text) => {

  const response = await githubGet(`/search/users`, { q: text });
  return response.data.items;

};

// Search Users and Repos
export const getUserAndRepos = async (login) => {
  const [users, repos] = await Promise.all([
    githubGet(`/users/${login}`),
    githubGet(`/users/${login}/repos`, {
      sort: "updated",
      per_page: 10,
    }),
  ]);

  return { users: users.data, repos: repos.data };
}