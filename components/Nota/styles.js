import styled from "styled-components";

export const Container = styled.div`
    height: 10px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: -90px;

    @media(max-width: 760px) {
        width: 100vw;
    }
`;

export const P = styled.p`
    font-size: 13px;
    color: #bdc1c6;
`;

export const English = styled.p`
    color: #8ab4f8;
    font-size: 13px;
    margin-left: 0.5rem;
`;