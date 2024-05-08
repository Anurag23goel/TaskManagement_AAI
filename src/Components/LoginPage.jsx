import './CSS/LoginPage.css'

const { useState } = require("react");

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/user/login' , {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      }),
    })

    const data = await response.json()

    if(data.user){
        alert('Login Successful')
        window.location.href = '/firstPage'
    }
    else{
        alert('Enter Correct Email or Password')
    }
  }
  return (
    <div className="container">
        <h1>Airport Authority of India</h1>
      
      <form>
      <h1>Login</h1>
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
        <input type="submit" value="Login" onClick={loginUser}/>
        <a href="/register">Create Account</a>
      </form>
    </div>
  );
}

export default LoginPage