import React from "react";
import { useState } from 'react'
import axios from "axios";

function ForgotPassword() {
  const [emailForm, setEmailForm] = useState({
    email: ''
  })
  const handleChange = (e) => {
    const { value, id } = e.target
    setEmailForm({ ...emailForm, [id]: value } );
  }
  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:4000/forgetPassword', emailForm)
    }
    catch (errors) {
      console.log(errors.response.data.message);
    }
  }
  return (
    <div className='App-2'>
      <div className='flex-column' id='fx'>
        <div className='card'>
          <div className='card-body m-3 p-4 next'>

            {/* <button type="button" className="btn btn-primary  ">
              <i className="fab fa-user-unlock"></i>
            </button> */}

            <h1 className='title'>Forgot password</h1>
            <p className="p1 m-1 text">Please enter a valid email</p>
            <input placeholder="enter your e-mail " className='form-control p-3 text' type='email' id="email" onChange={handleChange} />
          </div>
          <div className="row m-2 p-2 next">
            <input value='Next' onClick={handleSubmit} className='btn btn-primary m-2' type='button' />
            <input value='Cancel' className='btn btn-secondary m-2' type='button' />
          </div>
        </div>
      </div>
    </div>
  )

};

export default ForgotPassword