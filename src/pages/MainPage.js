import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IoIosLogOut, IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import axios from 'axios';

import UserContext from '../contexts/userContext';
import { Container, RegisterContainer, Balance, InAndOut, Empty } from '../styles/styledMain';

export default function MainPage() {

    const [balance, setBalance] = useState([]);
    const [total, setTotal] = useState(0);
    const { userInfo } = useContext(UserContext);
    const { token, userId } = userInfo.data;
    const history = useHistory();

    useEffect(() => {
        const request = axios.get('https://carlos-coutinho.herokuapp.com/api/payment', { headers: { 'Authorization': `Bearer ${token}`}});

        request.then(response => {
            setBalance(response.data);
            let sum = 0;
            response.data.forEach(e => {
                if(e.entry) sum += e.value;
                else sum -= e.value;
            });
            setTotal(sum);
        });
    }, []);

    function logout() {
        const request = axios.delete(`https://carlos-coutinho.herokuapp.com/api/sessions`, { headers: { 'Authorization': `Bearer ${token}`}});
        
        request.then(() => {
            history.push('/');
        });

        request.catch(() => {
            alert('houve um erro ao tentar se desconectar');
        });
    }

    return(
        <Container>
            <div>
                <h1>Olá, Fulano</h1>
                <IoIosLogOut onClick={logout} />
            </div>
            <RegisterContainer>
                {balance.length !== 0
                    ? <>
                        <Balance>
                            {balance.map(e => (
                                <div key={e.id}>
                                    <p>{e.description}</p>
                                    <p className={e.entry ? 'entry' : 'outflow'}>{e.value.toFixed(2).replace('.',',')}</p>
                                </div>
                            ))}
                        </Balance>
                        <span>
                            <strong>saldo</strong>
                            <p className={total >= 0 ? 'entry' : 'outflow'}>{total.toFixed(2).replace('.',',')}</p>
                        </span>
                    </>
                    : <Empty><p>Não há registros de entrada ou saída</p></Empty>
                }
            </RegisterContainer>
            <div>
                <InAndOut>
                    <Link to='entry-page'><button><p>Nova <br />entrada</p></button></Link>
                    <IoIosAddCircleOutline />
                </InAndOut>
                
                <InAndOut>
                    <Link to='outflow-page'><button><p>Nova<br />saída</p></button></Link>
                    <IoIosRemoveCircleOutline />
                </InAndOut>
            </div>
        </Container>
    );
}