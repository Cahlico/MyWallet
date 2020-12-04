import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Container } from '../styles/styledMoneyflow';
import UserContext from '../contexts/userContext';

export default function OutflowPage() {

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const { userInfo } = useContext(UserContext);
    const { userId, token } = userInfo.data;
    const [clicked, setClicked] = useState(false);
    const history = useHistory();

    function sendRequest() {
        if(value === '' || description === '') {
            alert('Por favor, preencha todos os campos');
            return;
        }

        if(!parseFloat(value)) return alert('digite o valor corretamente');

        setClicked(true);

        const body = { value: parseFloat(value), description, entry: false, userId };

        const request = axios.post('https://carlos-coutinho.herokuapp.com/api/payment',  body, { headers: { 'Authorization': `Bearer ${token}`}});
        request.then(() => {
            alert('salvo com sucesso');
            history.push('/main-page');
        });
        request.catch(() => {
            alert('dados inválidos, tente novamente com dados válidos');
            setClicked(false);
        })
    }

    return (
        <Container>
            <h1>Nova saída</h1>
            <input 
                type='text' 
                onChange={e => setValue(e.target.value)} 
                value={value} 
                placeholder='Valor, ex: 25,99'
            />
            <input
                type='text' 
                onChange={e => setDescription(e.target.value)} 
                value={description} 
                placeholder='Descrição'
            />
            {clicked
                ? <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif' />
                : <button onClick={sendRequest}>Salvar entrada</button>
            }
        </Container>
    );
}