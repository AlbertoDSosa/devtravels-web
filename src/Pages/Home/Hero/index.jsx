import React from 'react';
import './hero.scss';

function Hero (props) {
    const goToTravels = (e) => {
        e.preventDefault();
        document.querySelector('#travels').scrollIntoView({
            behavior: 'smooth'  
        });
        // let host = window.location.host;
        window.location.assign(`http://localhost:3000/#travels`);
    }
    
    return (
        <div className="hero-mainContainer">
            <div className="hero-main">
                <h1 className="hero-slogan">Viaja!</h1>
                <small className="hero-description">Descubre lugares maravillosos!</small>
            </div>
            <button className="hero-button" onClick={goToTravels}>Ver destinos</button>
        </div>
    );
}

export default Hero;