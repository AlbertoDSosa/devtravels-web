import React from 'react';
import './auth-form.scss';

class AuthForm extends React.Component {
    render() {
        return (
            <form className="authForm">
                {this.props.children}
            </form>
        );
    }
}

export default AuthForm;