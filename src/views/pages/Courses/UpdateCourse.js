import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { toast } from 'react-toastify';
import GetApi from 'src/views/services/CourseService';

function UpdateCourse() {
  const navigate = useNavigate()
  const params = useParams()

  const [list, setList] = useState({
    Name_of_Course: '',
    content: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setList(() => {
      return { ...list, [id]: value }
    })
  }

  useEffect(() => {
    const fetchdata = async () => {
      const data = await GetApi.getCourseById(params.id)
      setList(data.data)
    }
    fetchdata()
  }, [params.id])


  const handleSubmit = async () => {
    try {
     const course= await GetApi.UpdateCourseById(list , params.id)
     console.log(course);
      toast.success(course.data.message)
      navigate('/list-courses')
    }
    catch (errors) {
      console.log(errors.response.data.message);
    }
  }

  return (
    <div className='d-flex flex-column align-items-center w-100'>
      <h1 >Update Course </h1>
      <form className='p-3'>
        <div className="form-group">
          <label > Name_of_Course: </label>
          <input type="text" onChange={handleChange} value={list.Name_of_Course} className="form-control" id="Name_of_Course" />
        </div>

        <div className="form-group">
          <label > content: </label>
          <input type="file" onChange={handleChange} className="form-control" id="content" />
        </div>
        <ReactPlayer
          playing
          controls
          className='react-player'
          url={list.contentName}
          width='100%'
          height='100%'
        />


      </form>
      <button type="button" onClick={handleSubmit} className="btn btn-primary" >Update </button>

    </div>
  )
}

export default UpdateCourse