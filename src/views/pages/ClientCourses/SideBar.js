import React, { useEffect, useState } from 'react'
import GetApi from 'src/views/services/CourseService';
import Video from './Video';

function SideBar() {
    const [course, setCourse] = useState([])
    const [content, setContent] = useState({content:'',name:''})

    const fetchdata = async () => {
        const li = await GetApi.getAllCourses()
        setCourse(li.data)
    }
    const changeContent = (data) => {
        setContent({content:data.content,name:data.name})
    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <>
            <nav className="nav flex-column  bg-dark" style={{ height: '100%', width: '150px', overflowX: true }}>

                {course.map((course, index) => {
                    return <button key={index} className="btn text-white rounded-0 py-4 mb-2" onClick={()=>changeContent({content:course.contentName,name:course.Name_of_Course})} >{course.Name_of_Course}</button>

                })}
            </nav>
            <div className='w-100 bg-white p-5'>
                <Video content={content.content} name={content.name} />
            </div>
        </>
    )
}

export default SideBar