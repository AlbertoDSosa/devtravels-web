// SingIn Component

import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './sing-in.scss';
import AuthForm from '../../components/AuthForm';
import { singinAsync} from '../../Redux/Actions/auth';

function SingIn (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {singin} = props;

    useEffect(()=>{
        if(props.auth.singin) props.history.replace('/');
    })

    const onSubmit = (e) => {
        e.preventDefault();

        const body = {email,password};

        singin(body);
    }

    return (
        <div className="singin">
            <AuthForm onSubmit={onSubmit}>
                <h2>SINGIN</h2>
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
        singin: (body) => dispatch(singinAsync(body))
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);