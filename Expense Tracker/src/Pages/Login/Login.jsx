import  { useState } from 'react'
import "./Login.css"
const Login = () => {
  const [formData, setFormData] = useState({ Username: " ", Email: "",image:null })
  function handleImage(e) {
    console.log(e.target.files[0])
    setFormData({
      ...formData,
      image:e.target.files[0]
    })
  }
  function handleValueChange(event) {
    const { name, value } = event.target;
    setFormData(
      {
        ...formData,
        [name]: value
      }
    )
  }
  function handleFormSubmit(event){
    event.preventDefault()
  }
  console.log(formData)
  return (
    <main className='mainFormContainer'>
      <form 
      onSubmit={handleFormSubmit}
      className='form'>
        <img src="/iems.png" alt="" height={150} width={300} />
        <h1>Please Login To Proceed</h1>
        <input
          type="text"
          value={formData.Username}
          name="Username"
          id="Username"
          onChange={handleValueChange}
          placeholder='Username'
        />
        <input
          value={formData.Email}
          type="email"
          onChange={handleValueChange}
          name="Email"
          id="Email"
          placeholder='Email@xyz.com'
        />
        <input type="file" onChange={handleImage} name="Image" id="Image" placeholder='Image' />
        <button type="button">Submit</button>
      </form>
    </main>
  )
}

export default Login
