//Header component

import React from 'react';
import './layout.scss';
import Menu from './Menu';
import Hero from './Hero';
// import Dashboard from '../../Dashboard';
// import SingIn from '../../SingIn';
// import SingUp from '../../SingUp';

class Header extends React.Component {

    render() {
        return (
            <div className="layout">
                <Menu />
                <Hero />
                {/* <Dashboard /> */}
                {/* <SingIn /> */}
                {/* <SingUp /> */}
            </div>
        );
    }
}

export default Header;