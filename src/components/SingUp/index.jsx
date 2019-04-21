// SingUp Component

import React from 'react';
import './sing-up.scss';
import AuthForm from '../AuthForm/';
import airport from '../../assets/images/airport.jpg'

class SingUp extends React.Component {
    render(){
        return (
            <div className="singup">
                <img src={airport} alt="Airport" />
                <AuthForm>
                    <input type="text" name="username" id="username" placeholder="Nombre de usuario" />
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <input type="text" name="pasword" id="password" placeholder="Contraseña" />
                    <input type="text" name="pasword" id="password" placeholder="Repetir Contraseña" />
                    <div className="authForm-conditions">
                        <input type="checkbox" name="agree" id="agree" />
                        <span>Acepto los términos y condiciones, así como la política de privacidad.</span>
                    </div>
                    <button className="">Enviar</button>
                </AuthForm>
            </div>
        );
    }
}

export default SingUp;