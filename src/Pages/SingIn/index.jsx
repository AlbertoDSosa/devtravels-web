// SingIn Component

import React, {useState} from 'react';
import './sing-in.scss';
import AuthForm from '../../components/AuthForm';

function SingIn (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const body = {email,password};

        console.log(body);

        // axios.post('http://localhost:8080/users/auth', body).then(res => {
        //     console.log(res.headers.authorization)
        //     localStorage.setItem('authorization', res.headers.authorization)
        // }).catch(console.error)
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

export default SingIn;