import React from "react"
import "./About.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Header from "../common/heading/Header"
import ('../clientCss/App.css')

const About = () => {
  return (
    <>
       <Header/>
      <Back title='About Us' />
      <AboutCard />
    </>
  )
}

export default About