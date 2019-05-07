import React from 'react';
import './auth-form.scss';
import {Link} from 'react-router-dom';

function AuthForm (props) {
    
    const {message, error } = props;
    
    const style = {
        color: error ? 'red' : 'green',
        fontSize: ".7em",
        padding: ".5em"
    }
    
    return (
        <form className="authForm" onSubmit={props.onSubmit}>
            {error && <div style={style}>{ error.message }</div>}
            { 
                message &&
                !error  &&
                <div>
                    <div style={style}>{ message }</div>
                    <p>Puedes logearte en la página <Link to="/singin">Login</Link> </p>
                </div> 
            }
            {props.children}
        </form>
    );

}

export default AuthForm;