import React, { useState } from 'react'
// import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../AuthCss/Auth.css'
import { toast } from 'react-toastify';
function Register() {
  const navigate = useNavigate()
  const [register, setRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    genre: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setRegister(() => {
      return { ...register, [id]: value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const users = await axios.post('http://localhost:4000/register', register);
    
        console.log(users)
        if (users.status===201) {
          toast.success(users.data.message)
          navigate('/login')
        }else if(users.status===400) 
        {toast.error((users.data.message))}
    } catch (err) {
      toast.error(err.response.data.message)

    }

  }

  return (
    <div className='d-flex flex-column align-items-center register'>

      <div className='row'>

        <form className='col register-form'>
          <h1 className='text-center'>Create Account</h1>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">

                <label className="text"  >First Name</label>
                <input type="text" className="form-control" onChange={handleChange} id="firstName" placeholder="firstName" />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">

                <label className="text" placeholder="Last Name">Last Name</label>
                <input type="text" onChange={handleChange} id="lastName" className="form-control" placeholder="lastName" />
              </div>
            </div>
          </div>
          <div className="form-outline mb-2">
            <label className="text" type="email"  >Email address</label>
            <input type="email" onChange={handleChange}
              id="email" className="form-control" placeholder="email" />
          </div>

          <div className="form-outline mb-2">
            <label className="text" type="password">Password</label>
            <input type="password" onChange={handleChange}
              id="password" className="form-control" placeholder="password" />

          </div>

          <div className="form-outline mb-2">
            <label className="text" type="password" >Confirm password</label>
            <input type="password" onChange={handleChange}
              id="confirmPassword" placeholder="confirm-password" className="form-control" />
          </div>

          <div className="form-outline mb-2">
            <label className="text" type="address" >Address</label>
            <input type="address" onChange={handleChange}
              id="address" placeholder="address" className="form-control" />

          </div>

          <div className="form-outline mb-2">
            <label className="text">Genre</label>
            <input type="text" onChange={handleChange}
              id="genre" className="form-control" placeholder="Homme ou femme" />
             </div>

            {/* <select className="form-select form-select-lg mb-3 " onChange={handleChange}
              id="genre" placeholder="genre"  >
         
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select> */}
         
          <div className="d-grid gap-2 col-6 mx-auto">
            <button onClick={handleSubmit} className="btn btn-primary" type="button">Sign up</button>
          </div>

          <div className="text-center">
            <p className="text" >or sign up with:</p>
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
        <div className='col section-register m-2'>
        </div>
      </div>
    </div>
  )
}
export default Register