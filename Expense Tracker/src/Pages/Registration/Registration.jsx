import { useContext, useState } from "react"
import "./Registration.css"
import { Link, useNavigate } from "react-router-dom"
import { validEmail, validFullname, validPassword, validUsername } from "../../Utilities/validationFunc"
import { Register } from "../../Utilities/apiFunction"
import {UserContext} from "../../Utilities/userContext"
function Registration() {
  const navigate = useNavigate()
  const { loginUser } = useContext(UserContext)
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  function handleSubmit(event){
    event.preventDefault();
    if(!validFullname(fullName)){
      alert("Please Enter Valid Full Name")
      setFullName('')
      return;
    }
    if(!validUsername(userName)){
      alert("Please Enter Valid Username")
      setUserName('')
      return;
    }
    if(!validEmail(email)){
      alert("Please Enter Valid Email")
      setEmail('')
      return;
    }
    if(password === cPassword){
      if(!validPassword(password)){
        alert("Please Enter Valid Password")
        setPassword("")
        setCPassword('')
        return;
      }
    }
    else{
      alert("Password Not Matched")
      setPassword('')
      setCPassword('')
      return;
    }
    const formData = {
      userName,email,password,fullName
    }
    handleLogin(formData)
  }
  async function handleLogin(formData){
    try {
      const data = await Register(formData)
      console.log(data)
      loginUser(data)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className='registration-page'>
      <div className="inner-form-container">
        <img src="/iems.png" className="logo-image" alt="logo.png" />
        <form onSubmit={handleSubmit}>
          <input type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} name="fullName" id="fullName" placeholder="Fullname" />
          <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} name="userName" id="userName" placeholder="username" />
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} name="email" id="email" placeholder="abc@xyz.com" />
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} name="password" id="password" placeholder="Password" />
          <input type="password" value={cPassword} onChange={(event) => setCPassword(event.target.value)} name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
          <div className="input-box">
            <Link to={"/login"}>Login</Link>
            <Link>Forgot Password</Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Registration
