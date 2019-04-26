//MenuList Componet

import React from 'react';
import './menu-list.scss';

function MenuList (props) {
    
    return (
        <ul className="menu-list">
            {props.children}
        </ul>
    );
}

export default MenuList;
