//Header component

import React from 'react';
import './layout.scss';
import Menu from './Menu';

class Header extends React.Component {

    render() {
        return (
            <div className="layout">
                <Menu />
                {this.props.children}
            </div>
        );
    }
}

export default Header;