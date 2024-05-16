import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./CSS/LoginPage.css";
import StartingPage from "./StartingPage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  async function loginUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    localStorage.setItem('token', data.token)
    localStorage.setItem ('userID', data.user._id)

    if (data.user) {
      setIsLogin(true);
      alert("Login Successful");
      window.location.href = "/home";
    } else {
      alert("Enter Correct Email or Password");
      setIsLogin(false);
    }
  }

  // useEffect(() => {
  //   console.log(isLogin); // Log the updated value of isLogin
  //   // You can put any side effects dependent on isLogin here
  // }, [isLogin]); // Run this effect whenever isLogin changes

  return (
    <div className="container">
      <h1>Airport Authority of India</h1>

      <form onSubmit={loginUser}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
        <a href="/register">Create Account</a>
      </form>

      {/* {isLogin && <Outlet />} Conditional rendering based on isLogin */}
    </div>
  );
};

export default LoginPage;
