//MenuList Componet

import React from 'react';
import './menu-list.scss';

class MenuList extends React.Component {
    render() {
        return (
            <ul className="menu-list">
                {this.props.children}
            </ul>
        );
    }
}

export default MenuList;
