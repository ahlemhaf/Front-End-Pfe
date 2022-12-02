import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./Team.css"
import Awrapper from "../about/AWrapper"
import "../about/About.css"
import Header from "../common/heading/Header"
import('../clientCss/App.css')

const Team = () => {
  return (
    <>
       <Header/>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team