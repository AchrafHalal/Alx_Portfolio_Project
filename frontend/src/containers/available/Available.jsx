import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import './available.css'

const images =[img1, img2, img3, img4]

const Available = ()=> {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
    
        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };



  return (
    <div className='ashl__available flex__center' id='adopt'>
        <div className='ashl__available-content'>
            <h1 className='gradient__text' >Find Your Furry Friend: Adopt Today!</h1>
            <p style={{color:'#AAA', marginTop:'2rem'}}>
            Discover our selection of loving companions waiting to find their forever homes. From playful pups to affectionate felines,
             our adoptable pets are ready to bring joy to your life.
             Find your perfect match and make a difference today
            </p>
          <button type='button' className='btn'>Available</button>
        </div>
        <div className='ashl__gallery-images'>
            <div className='ashl__gallery-images_container' ref={scrollRef}>
                {images.map((image, index) => (
                    <div className='ashl__gallery-images_card flex__center' key={`gallery_image-${index +1}`}>
                        <img src={image} alt="gallery" />
                    </div>
                ))  }
                    <div className='ashl__gallery-images_card flex__center'>
                        <button type='button' className='btn-more'>More</button>
                    </div>
            </div>
            <div className='ashl__gallery-images_arrows' >
                  <BsArrowLeftShort className='gallery_arrow-icon' onClick={()=>scroll('left')} />
                  <BsArrowRightShort className='gallery_arrow-icon' onClick={()=>scroll('right')} />
            </div>
        </div>

    </div>
  )
}

export default Available