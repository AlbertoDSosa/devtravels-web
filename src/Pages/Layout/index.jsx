//Header component

import React from 'react';
import './layout.scss';
import useScroll from '../../Hooks/useScroll';
import Menu from './Menu';

function Layout (props) {
    let layoutRef = React.createRef();

    useScroll(layoutRef);

    return (
        <div ref={layoutRef} className="layout">
            <Menu />
            {props.children}
        </div>
    );
}

export default Layout;