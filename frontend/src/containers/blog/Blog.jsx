import React from 'react'
import paw from '../../assets/paw.png'
import './blog.css'

function Blog() {
  return (
    <section className="about-us" id='about us'>
    <div className="about">
      <img src={paw} className="pic"/>
      <div className="text">
        <h2 className='gradient__text'>About Us</h2>
        <h5>Discover Our Story: <span> Passion, Dedication, and Compassion</span></h5>
          <p>At ASHL, we are dedicated to providing exceptional pet care services tailored to meet the unique needs of each furry friend. With a team of passionate professionals and a commitment to excellence, we strive to create a safe, comfortable, and enjoyable environment for pets and their owners alike. From luxury boarding and grooming to premium daycare and specialized training programs, we prioritize the well-being and happiness of every pet in our care. Discover why pet owners trust us with their beloved companions and join our community of satisfied clients today.</p>
      </div>
    </div>
  </section>
    
  )
}

export default Blog