import styled from 'styled-components';

export const Container = styled.main`
    height: 100vh;
    padding: 0 5%;
    div {
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        color: #FFF;
    }

    svg {
        font-size: 40px;
        margin-top: 20px;
    }

    button {
        margin-top: 10px;
        background-color: #A328D6;
        width: 42vw;
        height: 16vh;
        border: none;
        outline-style: none;
        border-radius: 3px;
        color: #FFF;
    }
`;

export const RegisterContainer = styled.div`
    width: 86vw;
    height: 65%;
    background-color: #FFF;
    border-radius: 3px; 
`;

export const InAndOut = styled.div`
    position: relative;

    svg {
        position: absolute;
        font-size: 26px;
        top: -5px;
        left: 5px;
    }

    p {
        position: absolute;
        font-size: 18px;
        bottom: 5px;
        left: 5px;
        font-weight: bold;
    }
`;

export const Empty = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: #868686;
        font-size: 22px;
        padding: 0 20%;
    }
`;