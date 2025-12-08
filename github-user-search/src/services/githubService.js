import axios from "axios";

/**
 * Advanced search using GitHub API
 * @param {Object} params
 * @param {string} params.username - required
 * @param {string} params.location - optional
 * @param {number|string} params.minRepos - optional
 * @returns {Promise<{data: Array, error: string|null}>}
 */
export async function fetchAdvancedUserData({ username, location, minRepos }) {
  try {
    let query = `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return { data: response.data.items, error: null }; // items = array of users
  } catch (error) {
    return { data: null, error: "No users found" };
  }
}
