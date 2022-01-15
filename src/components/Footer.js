import React from 'react'
import '../_main.scss'
import '../scss/_footer.scss'

const Footer = () => {

    return (
        <>
            <footer className='footer'>
                <div className='footer-container'>
                    <div className='footer-container__info'>
                        <p className='info-text'>Curabitur consectetur dolor sit amet elit vestibulum iaculis. Duis nulla eros, facilisis ac sem sit amet, lacinia vulputate magna. In convallis, odio in imperdiet posuere, nulla arcu dictum magna, nec luctus neque est sit amet risus.</p>
                    </div>
                    <div className='footer-container__map'>
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.74073835205!2d-75.65125229906116!3d6.24419882129296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Medellin%2C%20Antioquia!5e0!3m2!1sen!2sco!4v1642265098414!5m2!1sen!2sco"></iframe>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer