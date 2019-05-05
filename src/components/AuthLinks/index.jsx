import React from 'react';
import './auth-links.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Icon from '../Icon';
import { singout } from '../../Redux/Actions/auth';

function AuthLinks(props) {
    const style = {
        border: 'solid 1px black',
        borderRadius: '50%',
        padding: '0.3em'
    }

    function handleOnClick() {
        props.singout();
    }

    return (
        <div className="authLinks-container">
            {
                !props.auth.singup && <Link to="/singup">Registro </Link>
            }
            <Icon iconName="user" style={style} />
            {
                !props.auth.singin ? 
                <Link to="/singin"> Login</Link> : 
                <span>
                    <Link to="/profile">{props.auth.user.username}</Link>
                    <button onClick={handleOnClick}>
                        <Icon iconName="switch" />
                    </button>
                </span>   
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        singout: () => dispatch(singout())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthLinks);