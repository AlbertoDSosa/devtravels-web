//Header component

import React from 'react';
import './layout.scss';
import Menu from './Menu';

function Header (props) {
    return (
        <div className="layout">
            <Menu />
            {props.children}
        </div>
    );
}

export default Header;