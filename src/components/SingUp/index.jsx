// SingUp Component

import React from 'react';

class SingUp extends React.Component {
    render(){
        return (
            <div className="singup">
                <img src="" alt="" />
                <form action="" className="singup-form">
                    <input className="singup-input" type="text" name="username" id="username" placeholder="Nombre de usuario" />
                    <input className="singup-input" type="text" name="email" id="email" placeholder="Email" />
                    <input className="singu-input" type="text" name="pasword" id="password" placeholder="Contraseña" />
                    <input className="singu-input" type="text" name="pasword" id="password" placeholder="Repetir Contraseña" />
                    <input type="checkbox" name="agree" id="agree"/>
                    <span></span>
                    <button className="">Enviar</button>
                </form>
            </div>
        );
    }
}