import React from 'react';
import './hero.scss';

class Hero extends React.Component {
    render(){
        return (
            <div className="hero-mainContainer">
                <div className="hero-main">
                    <h1 className="hero-slogan">Viaja!</h1>
                    <small className="hero-description">Descubre lugares maravillosos!</small>
                </div>
                <button className="hero-button">Ver destinos</button>
            </div>
        );
    }
}

export default Hero;