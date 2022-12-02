import React from "react"
import Title from "../../common/title/Title"
import "./hero.css"
import("../../clientCss/App.css")


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title  subtitle='WELCOME TO ACADEMIA ' title='Best Online Education Expertise' />
            {/* <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' /> */}
            <p className="mb-1">Propel your career, get a degree,or expand your knowledge at any level !</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero