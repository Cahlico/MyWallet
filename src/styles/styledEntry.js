import styled from 'styled-components';

export const EntryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        color: #FFF;
        font-size: 32px;
        margin-top: -80px;
    }

    a {
        margin-top: 40px;
        color: #FFF;
    }

    img {
        margin-top: 10px;
        height: 120px;
    }
`;

export const Form = styled.form`
    width: 100%;
    text-align: center;

    input, button {
        border: none;
        outline-style: none;
        font-size: 16px;
        margin: 5px;
        border-radius: 3px;

        ::placeholder {
            color: #000;
        }
    }

    input {
        width: 80%;
        padding: 15px;
    }

    button {
        width: 87.4%;
        padding: 10px 10px;
        color: #FFF;
        background-color: #A328D6;
    }
`;