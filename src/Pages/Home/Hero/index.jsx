import React from 'react';
import './hero.scss';

function Hero (props) {
    const goToTravels = () => {
        document.querySelector('#travels').scrollIntoView({
            behavior: 'smooth'  
        });
    }
   
    return (
        <section className="hero-mainContainer" id="home">
            <div className="hero-main">
                <h1 className="hero-slogan">Viaja!</h1>
                <small className="hero-description">¡Descubre lugares maravillosos!</small>
            </div>
            <button className="hero-button" onClick={goToTravels}>Ver destinos</button>
        </section>
    );
}

export default Hero;