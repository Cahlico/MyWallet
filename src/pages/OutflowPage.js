import React, { useState } from 'react';
import { Container } from '../styles/styledMoneyflow';

export default function OutflowPage() {

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    return (
        <Container>
            <h1>Nova saída</h1>
            <input 
                type='text' 
                onChange={e => setValue(e.target.value)} 
                value={value} 
                placeholder='Valor'
            />
            <input
                type='text' 
                onChange={e => setDescription(e.target.value)} 
                value={description} 
                placeholder='Descrição'
            />
            <button>Salvar saída</button>
        </Container>
    );
}