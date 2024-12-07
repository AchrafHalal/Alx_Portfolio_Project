import React, { useState } from 'react';
import './services.css';

function Services() {
    const [cards] = useState([
        {
            imgSrc: require('../../assets/sys.png'),
            title: 'Systèmes d\'irrigation automatisée',
            text: 'Indulge your pet in a luxurious staycation with our spacious accommodations, personalized attention, and top-notch amenities.'
        },
        {
            imgSrc: require('../../assets/mobile.png'),
            title: 'Application mobile de gestion',
            text: 'Transform your pet\'s appearance with our expert grooming services, including stylish haircuts, luxurious baths, and meticulous attention to detail.'
        },
        {
            imgSrc: require('../../assets/maintenance.png'),
            title: 'Maintenance et support',
            text: 'Keep your pet entertained and socialized with our premium daycare facilities, providing a safe and stimulating environment for play and interaction.'
        },
        {
            imgSrc: require('../../assets/consultation.png'),
            title: 'Formation et consultation',
            text: 'Treat your pet to a day of relaxation and rejuvenation with our exclusive spa treatments, promoting wellness and enhancing their overall happiness.'
        },
        {
            imgSrc: require('../../assets/analyse.png'),
            title: 'Analyse des données et rapports',
            text: 'Unlock your pet\'s full potential with our personalized training programs, designed to address specific needs and foster obedience and good behavior.'
        },
        {
            imgSrc: require('../../assets/miseAjour.png'),
            title: 'Mise à jour logicielle',
            text: 'Prioritize your pet\'s health with our personalized health and wellness consultations. Our expert veterinarians offer tailored advice on nutrition, preventive care, and overall well-being, ensuring your pet leads a happy and healthy life.'
        }
    ]);

    const [services, setServices] = useState([]);
    

    return (
        <div className="all">
            <div className='services' id='services'>
            <section>
                <div className="container">
                    <h3 className='titre1'>Our Services</h3>
                    <h1><span className='p1'>Nos</span> Servises</h1>
                    <div className="cards">
                        {cards.map((card, index) => (
                            <div className="card" key={index}>
                                <div className="icon"><img src={card.imgSrc} alt={card.title} /></div>
                                <h3>{card.title}</h3>
                                <p className='content'>{card.text}</p>
                                <a className='link' href="#">Read more</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="booking section__padding" id='book'>
                <div className="form_Container">
                    <form >
                        <input type="text" placeholder='Your Name' name="name"   />
                        <input type="email" placeholder='Your Email' name="email"   />
                        <input type="date" placeholder='Reservation date' name="reservation_date"   />
                        <input type="time" placeholder='Reservation Time' name="reservation_time"   />
                        <select name="service_id">
                            <option value="" disabled selected hidden>Choose a service</option>
                            {services.map(service => (
                                <option key={service.id} value={service.id}>{service.name}</option>
                            ))}
                        </select>
                        <input type="submit" value="Book Now" />
                    </form>
                </div>
                <div className="form_content">
                    <h3 className='titre1'>Schedule Your Agricultural Project Today</h3>
                    <h1><span className='p1'>Bring Your</span>  Farming Ambitions to Life</h1>
                    <div className="par">
                        <p>
                        Experience seamless planning for your agricultural needs with our easy-to-use online platform. Simply provide the necessary details, select your desired service, and choose a convenient time for consultation. Our team will quickly confirm your booking, ensuring your project gets the expert attention it deserves without delay.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Services;
