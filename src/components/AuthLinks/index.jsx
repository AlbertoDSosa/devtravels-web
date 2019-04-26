import React from 'react';
import './auth-links.scss';
import {Link} from 'react-router-dom';
import Icon from '../Icon';

function AuthLinks(props) {
    const style = {
        border: 'solid 1px black',
        borderRadius: '50%',
        padding: '0.3em'
    }
    return (
        <div className="authLinks-container">
            <Link to="/singup">singup</Link>
            |
            <Link to="/singin">singin</Link>
            <Icon iconName="user" style={style} />
        </div>
    );
}

export default AuthLinks;