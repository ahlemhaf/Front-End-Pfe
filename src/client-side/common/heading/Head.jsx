import React from 'react'
import('../../clientCss/App.css')

const Head = () => {
  return (
    <>
<section className='head'>
<div className='container flexSB'>
  <div className='logo'>
    <h1>ACADEMIA</h1>
    <span>Online Education & Learning</span>
  </div>
  <div className='social'>
        <i className="fab fa-facebook-f icon"></i>
    <i className='fab fa-instagram icon'> </i>
    <i className='fab fa-twitter icon'> </i>
    <i className='fab fa-youtube icon'> </i>

  </div>
</div>
</section>
    </>
  )
}

export default Head