// SingUp Component

import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './sing-up.scss';
import AuthForm from '../../components/AuthForm';
import useName from '../../Hooks/useName';
import { singupAsync} from '../../Redux/Actions/auth';


function SingUp (props) {
    const [username, setName] = useName(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { singup } = props;

    useEffect(()=>{
        if(props.auth.singup) props.history.replace('/singin'); 
    })

    const onSubmit = (e) => {
        e.preventDefault();
        const body = {username, email, password};
        singup(body);
    }

    return (
        <div className="singup">
            <AuthForm onSubmit={onSubmit}>
                <h2>SINGUP</h2>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Nombre de usuario"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="pasword"
                    id="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* <div className="authForm-conditions">
                    <input type="checkbox" name="agree" id="agree" />
                    <span>Acepto los términos y condiciones, así como la política de privacidad.</span>
                </div> */}
                <button>Enviar</button>
            </AuthForm>
        </div>
    );

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        singup: (body) => dispatch(singupAsync(body))
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);