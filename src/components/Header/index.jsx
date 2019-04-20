//Header component

import React from 'react'
import hero from '../../assets/images/hero.jpg';
import './header.scss';
import Menu from '../Menu/index';

class Header extends React.Component {

    render() {
        
        return (
            <div className="hero">
                <img ref= {this.heroImg} className="hero-img" src={hero} alt="hero-background"/>
                <Menu />
                <div className="hero-mainContainer">
                    <div className="hero-main">
                        <h1 className="hero-slogan">Viaja!</h1>
                        <small className="hero-description">Descubre lugares maravillosos!</small>
                    </div>
                    <button className="hero-button">Ver destinos</button>
                </div>
            </div>
        );
    }
}

export default Header;