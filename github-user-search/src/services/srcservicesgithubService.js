// src/services/githubService.js
import axios from "axios";

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: "User not found" };
  }
}
