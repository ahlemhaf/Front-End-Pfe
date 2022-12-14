import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import GetApi from 'src/views/services/CourseService';

function ViewCourse() {
  const params = useParams()

  const [course, setCourse] = useState({
    Name_of_Course: '',
    content: ''
  })

  useEffect(()=>{
    const fetchdata = async () => {
        const data = await GetApi.getCourseById(params.id)
        setCourse(data.data)
      }
      fetchdata()
    }, [params.id])


  return (
    <div className='d-flex flex-column align-items-center w-100'>
      <h1 > {course.Name_of_Course} </h1>
      <form className='p-3'>
        
        <div className="form-group">
        <ReactPlayer
          playing
          controls
          className='react-player'
          url={course.contentName}
          width='100%'
          height='100%'
        />
          </div>

      </form>
    </div>
  )
}

export default ViewCourse