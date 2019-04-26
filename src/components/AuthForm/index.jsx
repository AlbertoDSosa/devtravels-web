import React from 'react';
import './auth-form.scss';

function AuthForm (props) {
    
    return (
        <form className="authForm" onSubmit={props.onSubmit}>
            {props.children}
        </form>
    );

}

export default AuthForm;