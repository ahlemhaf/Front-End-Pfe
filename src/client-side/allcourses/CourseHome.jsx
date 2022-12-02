import React from "react"
import Back from "../common/back/Back"
import Header from "../common/heading/Header"

import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import ('../clientCss/App.css')

const CourseHome = () => {
  return (
    <>
       <Header/>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome