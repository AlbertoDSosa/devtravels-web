// SingIn Component

import React from 'react';
import './sing-in.scss';
import AuthForm from '../../components/AuthForm';

class SingIn extends React.Component {
    render() {
        return (
            <div className="singin">
                <AuthForm>
                    <h2>SINGIN</h2>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <input type="text" name="pasword" id="password" placeholder="Contraseña" />
                    <button>Enviar</button>
                    <p>¿Has olvidado tu contraseña?</p>
                </AuthForm>
            </div>
        );
    }
}

export default SingIn;