import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./Blog.css"
import Header from "../common/heading/Header"
import ('../clientCss/App.css')

const Blog = () => {
  return (
    <>
       <Header/>
      <Back title='Blog Posts' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog