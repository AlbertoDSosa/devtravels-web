import React from 'react';
import './auth-links.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Icon from '../Icon';

function AuthLinks(props) {
    const style = {
        border: 'solid 1px black',
        borderRadius: '50%',
        padding: '0.3em'
    }
    return (
        <div className="authLinks-container">
            {
                !props.auth.singup && <Link to="/singup">singup </Link>
            }
            <Icon iconName="user" style={style} />
            {
                !props.auth.singin ? 
                <Link to="/singin"> singin</Link> :
                <span>{props.auth.user.username}</span>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}


export default connect(mapStateToProps)(AuthLinks);