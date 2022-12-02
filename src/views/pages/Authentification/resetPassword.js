import React from "react";
import { useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const [passwordForm, setPasswordForm] = useState({
    password: '',
    confirm_password:''
  })
  const params=useParams()
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { value, id } = e.target
    setPasswordForm({ ...passwordForm, [id]: value } );
  }
  const handleSubmit = async () => {
    try {
      await axios.put('http://localhost:4000/resetPassword/'+params.token,passwordForm)
      navigate('/login')
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

            <h1 className='title'>Reset your password</h1>
            <input placeholder="Password " className='form-control p-3 text' type='password' id="password" onChange={handleChange} />
            <input placeholder="Confirm_Password " className='form-control p-3 text' type='password' id="confirm_password" onChange={handleChange} />
          </div>
          <div className="row m-3 p-3 next">
            <input value='next' onClick={handleSubmit} className='btn btn-primary m-2' type='button' />
          
          </div>
        </div>
      </div>
    </div>
  )
};

export default ResetPassword