// Menu Component

import React from 'react'
import './menu.scss';
import logo from '../../../assets/images/iconoweb.png';
import MenuList from '../../../components/MenuList/';
import SocialIcon from '../../../components/SocialIcon/';

class Menu extends React.Component {

    render() {
        return (
            <div className="nav-menu">
                <figure className="logo">
                    <img className="logo-img" src={logo} alt="devtravels logo"/>
                    <figcaption className="app-name">
                        DevTravels
                    </figcaption>
                </figure>
                <MenuList >
                    <li><a href="#travels">Destinos</a></li>
                    <li><a href="#aboutAs">Quién Somos</a></li>
                    <li><a href="#where">Donde Estamos</a></li>
                </MenuList>
                <MenuList>
                    <li>
                        <a href="http://twiter.com" target="_blank" rel="noopener noreferrer">
                            <SocialIcon iconName="twitter" bcolor="#009dbe"/>
                        </a>
                    </li>
                    <li>
                        <a href="http://whatsapp.com" target="_blank" rel="noopener noreferrer">
                            <SocialIcon iconName="whatsapp" bcolor="#2fab4c"/>
                        </a>
                    </li>
                    <li>
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                            <SocialIcon iconName="facebook" bcolor="#294e7c"/>
                        </a>
                    </li>
                    <li>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                            <SocialIcon iconName="instagram" bcolor="#3965a4"/>
                        </a>
                    </li>
                    <li>
                        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <SocialIcon iconName="linkedin2" bcolor="#005b80"/>
                        </a>
                    </li>
                    <li>
                        <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                            <SocialIcon iconName="youtube" bcolor="#f22f33"/>
                        </a>
                    </li>
                </MenuList>
            </div>
        );
    }
}

export default Menu;