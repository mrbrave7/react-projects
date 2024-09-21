import {  useEffect, useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { LoginApi } from '../../Utilities/apiFunction';
import { useUser } from '../../Utilities/userContext';

const Login = () => {
  const navigate = useNavigate();
  const {loginUser,user} = useUser()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (!userName || !password) {
      alert("All credentials are required");
    } else {
      const data = { userName, password };
      try {
        const userData = await LoginApi(data);
        console.log("Login successful:", userData);
        loginUser(userData);
        navigate("/");

      } catch (error) {
        console.log("Login failed:", error);
      }
    }
    event.target.reset()
  }
  useEffect(() => {
    if (user) {
      console.log("Updated user:", user);
    }
  }, [user]); 

  return (
    <main className='mainFormContainer'>
      <form onSubmit={handleFormSubmit} className='form'>
        <img src="/iems.png" alt="" height={150} width={300} />
        <input
          type="text"
          value={userName}
          name="Username"
          id="Username"
          onChange={(event) => setUserName(event.target.value)}
          placeholder='abc@xyz.com'
        />
        <input
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          id="password"
          placeholder='Password'
        />
        <button type="submit">Login</button>
        <div className="input-box">
          <Link to={"/register"}>Create New Account</Link>
          <Link>Forgot Password</Link>
        </div>
      </form>
    </main>
  );
};

export default Login;
