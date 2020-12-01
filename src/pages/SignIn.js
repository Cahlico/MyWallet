import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { EntryContainer, Form } from '../styles/styledEntry';
import UserContext from '../contexts/userContext';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [clicked, setClicked] = useState(false);
    const { userInfo, setUserInfo } = useContext(UserContext);
    const history = useHistory();

    function sendRequest(event) {
        event.preventDefault();

        if(clicked) return;

        if(email === '' || password === '') {
            alert('Por favor, preencha todos os campos');
            return;
        }

        setClicked(true);

        /*const request = axios.post('https://localhost:3000/api/sign_in', { email, password, userId });

        request.then(response => {
            const data = response.data;
            setUserInfo({ ...userInfo, data });
            const jsonData = JSON.stringify({data});
            localStorage.data = jsonData;            
            history.push('/main-page');
        });

        request.catch(() => {
            alert('E-mail ou senha incorretos');
            setClicked(false);
        });*/

        history.push('/main-page');
    }

    return (
        <EntryContainer>
            <h1>My Wallet</h1>
            <Form onSubmit={sendRequest}>
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
                    placeholder='Password'
                />
                {clicked 
                    ? <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif' />
                    : <button type='submit' >Log In</button>
                }
            </Form>
            <Link to='/Sign-up' >Primeira vez? Cadastre-se</Link>
        </EntryContainer>
    );
}