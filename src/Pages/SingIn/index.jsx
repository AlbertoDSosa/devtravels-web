// SingIn Component

import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './sing-in.scss';
import AuthForm from '../../components/AuthForm';
import { singIn } from '../../Redux/Actions/auth';

function SingIn (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)

    const { singin } = props;

    useEffect(()=>{
        if(props.auth.isLogged) props.history.replace('/');
    })

    const onSubmit = (e) => {
        e.preventDefault();

        const body = { email, password };

        singin(body)
            .catch(err => {
                setError(err.response.data);
            });
    }

    return (
        <div className="singin">
            <AuthForm onSubmit={onSubmit} error={error}>
                <h2>LOGIN</h2>
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

                <button>Enviar</button>
                <p>¿Has olvidado tu contraseña?</p>
            </AuthForm>
        </div>
    );
  
}

const mapDispatchToProps = (dispatch) => {
    return {
        singin: (body) => singIn(dispatch, body)
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);