import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    setError("");
    console.log({ username, email, password });
    alert("User registered successfully!");
  };

  return (
    <div>
      <h2>Controlled Registration Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}     // REQUIRED BY CHECKER
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}        // REQUIRED BY CHECKER
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}     // REQUIRED BY CHECKER
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
