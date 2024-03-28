import React from 'react'
import shelter from '../../assets/shelter.png'
import './header.css'

function Header() {
  return (
    <div className='ashl__header section__padding' id='home'>
      <div className='ashl__header-content'>
        <h1 className='gradient__text'>
          Welcome to ASHL – Where Every Paw Finds a Home
        </h1>
        <p>
        Thank you for stepping into the heart of compassion and care. At ASHL, we are dedicated to creating a haven for animals in need, offering them a second chance at love and happiness. Explore our world of wagging tails, heartwarming success stories, and the unwavering commitment to animal welfare. Join us in making a difference—one paw at a time.
         Welcome to a place where every animal's journey begins a new.
        </p>
        <div className='ashl__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
      </div>
      <div className='ashl__header-image'>
          <img src={shelter} alt='shelter'/>
        </div>
    </div>
  )
}

export default Header