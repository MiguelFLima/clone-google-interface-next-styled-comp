import styled from "styled-components";
import { BiBorderNone } from 'react-icons/bi';

export const Container = styled.div`
    height: 70px;
    width: 100vw;

    @media(max-width: 760px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
    }
`;

export const Container_nav = styled.div`
    display: flex;
    height: 80px;
    margin-right: 1.2rem;
    align-items: center;
    justify-content: flex-end;
    margin-top: -0.6rem;

    @media(max-width: 760px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 0;
        margin-right: 0;
    }
`;

export const Img = styled.img`
    border-radius: 50%;
    height: 32px;
    width: 32px;
`;

export const Icon = styled(BiBorderNone)`
    height: 24px;
    width: 24px;
    cursor: pointer;
    margin-right: 1.2rem;
    color: white
`;  

export const Link = styled.p`
    font-size: 13px;
    margin-right: 1.2rem;
    color: white;
    cursor: pointer;
    font-weight: 'bold';
    font-family: arial, sans-serif;
`;