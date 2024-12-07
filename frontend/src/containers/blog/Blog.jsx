import React from 'react'
import prj from '../../assets/prj.png'
import './blog.css'

function Blog() {
  return (
    <section className="about-us" id='about_us'>
    <div className="about">
      <img src={prj} alt="projet" className="pic"/>
      <div className="text">
        <h2 className='gradient__text'>About Us</h2>
        <h5>Discover Our Story: <span> Passion, Dedication, and Compassion</span></h5>
          <p>At AgriTech, we are committed to empowering agricultural success through innovative solutions tailored to meet the unique needs of every farmer. With a team of dedicated experts and a focus on sustainability, we aim to create a productive, efficient, and environmentally friendly farming experience. From advanced soil management and crop optimization to cutting-edge technology and expert consultations, we prioritize the growth and prosperity of every agricultural venture. Discover why farmers trust us to cultivate their success and join our community of thriving agricultural partners today.</p>
      </div>
    </div>
  </section>
    
  )
}

export default Blog