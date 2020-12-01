import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IoIosLogOut, IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';

import { Container, RegisterContainer, InAndOut, Empty } from '../styles/styledMain';

export default function MainPage() {

    const [entry, setEntry] = useState([]);
    const [outflow, setOutflow] = useState([]);
    const history = useHistory();

    function logout() {
        /*
            request = axios.delete(`http://localhost:3000/api/sessions`, id);

            request.then() {
                history.push('/');
            }
        */

       history.push('/');
    }

    return(
        <Container>
            <div>
                <h1>Olá, Fulano</h1>
                <IoIosLogOut onClick={logout} />
            </div>
            <RegisterContainer>
                {entry.length !== 0 || outflow.length !== 0
                    ? 'botar coisa aqui'
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