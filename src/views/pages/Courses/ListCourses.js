
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import courseService from '../../services/CourseService'
function ListClient() {

  const [courseForm, setCourseForm] = useState([])

  const fetchdata = async () => {
    const li = await courseService.getAllCourses()
    setCourseForm(li.data)
  }
  const handleDelete = async (listId) => {
   const course= await courseService.DeleteCourse(listId)
    fetchdata()
    if (course.status===200) {
      toast.error(course.data.message)
    }

  }

  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div className='d-flex flex-column  align-items-center m-3'>
      <h1 className='text-center' > List of Courses</h1>
      <Link className="btn btn-primary m-2 " type="button" to="/AddCourse">Add Course</Link>
      {courseForm.length === 0 ? <h1>pas de course</h1> :
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th className="col-1">id</th>
              <th className="col-7">Name_of_Course</th>
              <th className="col-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courseForm.map((course, index) => {
              return (
                <tr key={index}>
                  <td >{index + 1}</td>
                  <td>{course.Name_of_Course}</td>
                  <td>  <Link className="btn btn-success m-2" type="button" to={`/UpdateCourse/${course._id}`}>Update</Link>
                    <button className="btn btn-danger m-2" onClick={() => handleDelete(course._id)} >Delete</button>
                    <Link className="btn btn-info m-2" to={`/ViewCourse/${course._id}`} >View</Link>
                    </td>

                </tr>
              )
            })}

          </tbody>
        </table>}
    </div>
  )
}

export default ListClient

