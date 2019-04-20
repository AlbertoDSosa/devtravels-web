// SingIn Component

import React from 'react';

class SingIn extends React.Component {
    render(){
        return (
            <div className="singin">
                <img src="" alt="" />
                <form action="" className="singin-form">
                    <input className="singin-input" type="text" name="email" id="email" placeholder="Email" />
                    <input className="singin-input" type="text" name="pasword" id="password" placeholder="Contraseña" />
                    <input className="" type="submit" value="Enviar" />
                </form>
            </div>
        );
    }
}

export default SingIn;