import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../AuthCss/Auth.css'
import { toast } from 'react-toastify';

function Login() {
    const navigate=useNavigate()
const [loginForm,setLoginForm]=useState({
  email:'',
  password:''
})

const handleChange=(e)=>{
const {id,value}=e.target
setLoginForm(()=>{
    return {...loginForm,[id]:value}
})
}
const handleSubmit = async(e) => {
  e.preventDefault()
  try {
    const users = await axios.post('http://localhost:4000/login',loginForm);
    
      console.log(users)
      if (users.status===200) {
        toast.success(users.data.message)
        localStorage.setItem('token',users.data.token)
        navigate('/dashbord')
      }else if(users.status===400) 
      {toast.error((users.data.message))}
  } catch (err) {
    toast.error(err.response.data.message)

  }


}
  return (
<div className='d-flex flex-column align-items-center register-2' style={{color:'black'}}>

<div className='row p-7 m-3' >

  <form className='col register-form-2 m-2 p-15'>
    <h1 className='text-center' >Log in </h1>
  
    <div className="form-outline mb-2">
      <label className="text" type="email"  >Email address</label>
      <input type="email" onChange={handleChange}
        id="email" className="form-control" placeholder="email" />
    </div>

    <div className="form-outline mb-2">
      <label className="text" type="password">Password</label>
      <input type="password" onChange={handleChange}
        id="password" className="form-control " placeholder="password" />
    </div>

<div className="text-center ">
 <Link className='btn btn-link text'to='/forgotPassword' >forgot password</Link>
 </div>
 <br></br>
  
    <div className="d-grid gap-2 col-6 mx-auto">
      <button onClick={handleSubmit} className="btn btn-primary" type="button">log in</button>
    </div>

    <div className="text-center">
      <p className="text" >or log in with:</p>
      <button type="button" className="btn btn-primary btn-floating mx-1">
        <i className="fab fa-facebook-f"></i>
      </button>

      <button type="button" className="btn btn-primary btn-floating mx-1">
        <i className="fab fa-google"></i>
      </button>

      <button type="button" className="btn btn-primary btn-floating mx-1">
        <i className="fab fa-twitter"></i>
      </button>

      <button type="button" className="btn btn-primary btn-floating mx-1">
        <i className="fab fa-github"></i>
      </button>
    </div>
  </form>
  
  <div className='col section-register-2 m-5 p-15 ' >

  </div>
</div>
</div>
)
}
export default Login