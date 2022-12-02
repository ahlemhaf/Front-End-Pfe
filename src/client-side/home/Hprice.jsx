import React from "react"
import Title from "../common/title/Title"
// import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"
import("../clientCss/App.css")

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Title subtitle='OUR PRICING' title='Pricing & Packages' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice