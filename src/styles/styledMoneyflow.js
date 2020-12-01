import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding: 5%;

    h1 {
        color: #FFF;
        font-weight: 700;
    }

    input, button {
        border: none;
        border-radius: 3px;
        outline-style: none;
        font-size: 20px;
        margin: 7px 0;
    }

    input {
        padding: 15px 10px;
        width: 90%;

        ::placeholder {
            color: #000;
        }
    }

    button {
        background-color: #A328D6;
        color: #FFF;
        width: 96%;
        font-weight: 600;
        padding: 12px;
    }
`;