import React, { useState } from 'react';
import { Link, History, useHistory } from 'react-router-dom';
import axios from 'axios';

import { EntryContainer, Form } from '../styles/styledEntry';

export default function SignIn() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [clicked, setClicked] = useState(false);
    const history = useHistory();

    function sendRequest(event) {
        event.preventDefault();

        if(clicked) return;

        if(email === '' || username === '' || password === '' || passwordConfirmation === '') {
            alert('Por favor, preencha todos os campos');
            return;
        }

        setClicked(true);

        const request = axios.post('http://localhost:3000/api/sign_up', { email, username, password, passwordConfirmation });

        request.then(() => {
            alert('Cadastrado com sucesso!');
            history.push('/');
        });

        request.catch(() => {
            alert('E-mail inserido já cadastrado');
            setClicked(false);
        });
    }

    return (
        <EntryContainer>
            <h1>My Wallet</h1>
            <Form onSubmit={sendRequest} >
                <input 
                    type='text' 
                    onChange={e => setUsername(e.target.value)} 
                    value={username} 
                    placeholder='Nome'
                />
                <input 
                    type='email'
                    onChange={e => setEmail(e.target.value)} 
                    value={email} 
                    placeholder='E-mail'
                />
                <input 
                    type='password'
                    onChange={e => setPassword(e.target.value)} 
                    value={password} 
                    placeholder='Senha'
                />
                <input 
                    type='password'
                    onChange={e => setPasswordConfirmation(e.target.value)} 
                    value={passwordConfirmation} 
                    placeholder='Confirme a senha'
                />
                {clicked 
                    ? <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif' />
                    : <button type='submit' >Log In</button>
                }
            </Form>
            <Link to='/' >Já tem uma conta? Entre agora!</Link>
        </EntryContainer>
    );
}