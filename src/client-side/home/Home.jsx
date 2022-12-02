import React from 'react'
import AboutCard from '../about/AboutCard'
import Footer from '../common/footer/Footer'
import Header from '../common/heading/Header'
import HAbout from './HAbout'
import Hblog from './Hblog'
import Hero from './hero/Hero'
import Hprice from './Hprice'
import Test from './testimonal/Test'
import ('../clientCss/App.css')


const Home = () => {
  return (
    <>
    <Header/>
<Hero/>
<AboutCard/>
<HAbout/>
<Test/>
<Hblog/>
<Hprice/>
<Footer/>
    </>
  )
}

export default Home

