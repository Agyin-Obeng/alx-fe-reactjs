import { useState } from "react";
import { fetchUserData } from "../services/githubService.js";
function Search() {
  // Input states
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  // Result & UI states
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    if (!username.trim()) {
      setError("Username is required");
      setLoading(false);
      return;
    }

    const result = await fetchUserData({ username, location, minRepos });

    if (result.error) {
      setError(result.error);
    } else {
      setUsers(result.data);
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-center mb-2">GitHub Advanced Search</h2>

        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 font-medium">Username *</label>
          <input
            type="text"
            id="username"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="mb-1 font-medium">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="minRepos" className="mb-1 font-medium">Minimum Repositories</label>
          <input
            type="number"
            id="minRepos"
            placeholder="e.g., 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white font-semibold p-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* Results */}
      {users && users.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="border p-4 rounded flex items-center gap-4 shadow hover:shadow-md transition"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold">{user.login}</h3>
                {user.location && <p>Location: {user.location}</p>}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
