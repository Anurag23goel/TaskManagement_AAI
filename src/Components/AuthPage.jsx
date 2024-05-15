const { useState } = require("react");
import { useNavigate } from "react-router-dom";
import "./CSS/AuthPage.css";

function AuthPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    window.location.href = "/";
  }

  return (
    <div className="auth-container">
      <h1>Airport Authority of India</h1>
      <form onSubmit={registerUser}>
        <h1>Register Here</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Your Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Register" />
        <a href="/">Already a User ?</a>
      </form>
    </div>
  );
}

export default AuthPage;
