import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import courseAPIS from 'src/views/services/CourseService';


function AddCourse() {
  const navigate=useNavigate();
  const[courseForm,setCourseForm]=useState({
    Name_of_Course:''
  });

  const handleChange=(e)=>{
    const {id,value}=e.target
    setCourseForm(()=>{
      return{...courseForm,[id]:value}
    })
  }

  const [file,setFile]=useState();

  const onFileSelect=(e)=>{
    setFile(e.target.files[0])
    console.log(e.target.files[0]);
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData=new FormData();
    Object.keys(courseForm).forEach(fieldName =>{
      formData.append(fieldName,courseForm[fieldName]);
    })
if (file){
  formData.append('content',file,file.name)
}

try {
  const course = await courseAPIS.createCourse(formData);
    console.log(course)
    if (course.status===201) {
      toast.success(course.data.message)
      navigate('/list-courses')
    }else if(course.status===400) 
    {toast.error((course.data.message))}
    }catch(err) {
      toast.error(err.response.data.message)
    }
  }
  

  return (
    <div className='d-flex flex-column align-items-center'>
    <h1 >Add Course </h1>
    <form className='p-3 col-6'>
    <div className="form-group">
        <label > Name of Course: </label>
        <input type="text" onChange={handleChange} className="form-control" id="Name_of_Course" />
  </div>



    <div className="form-group">
        <label >File: </label>
        <input type="file" onChange={onFileSelect} className="form-control" id="content" />
    </div>


    <button type="button" onClick={handleSubmit} className="btn btn-primary m-3" >Upload</button>
</form>


</div>
  )
}

export default AddCourse