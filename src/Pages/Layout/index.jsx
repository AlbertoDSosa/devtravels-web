//Header component

import React from 'react';
import './layout.scss';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}

export default connect(mapStateToProps)(Layout);