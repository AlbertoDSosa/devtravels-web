// SingUp Component

import React, {useState, useEffect} from 'react';
import './sing-up.scss';
import AuthForm from '../../components/AuthForm';
import useName from '../../Hooks/useName';
import { singUp } from '../../Request/singup';


function SingUp (props) {
    const [username, setName] = useName(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const onSubmit = (e) => {
        setError(null);
        setMessage('');

        e.preventDefault();
        const body = {username, email, password};

        singUp(body)
            .then(res =>{
                setMessage(res.data.message);
            })
            .catch(err => {
                setError(err.response.data);
            });
    }

    useEffect(()=> {
        if(message && !error) {
            setEmail('');
            setName('');
            setPassword('');
        }
    }, [error, message]);

    return (
        <div className="singup">
            <AuthForm onSubmit={onSubmit} error={error} message={message}>
                <h2>REGISTRO</h2>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    placeholder="Nombre de usuario"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="pasword"
                    id="password"
                    placeholder="Contraseña"
                    value={password}
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


export default SingUp;