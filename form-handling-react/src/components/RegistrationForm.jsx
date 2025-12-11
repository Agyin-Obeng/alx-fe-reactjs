import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Basic validation
  const validate = () => {
    if (!formData.username || !formData.email || !formData.password) {
      setErrors("Please fill all fields.");
      return false;
    }
    setErrors("");
    return true;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Submitted Data:", formData);

    // Simulated API call
    alert("User registered successfully!");
  };

  return (
    <div>
      <h2>Controlled Registration Form</h2>

      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        /> <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        /> <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        /> <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
