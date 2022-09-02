import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsKeyboard } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi'

export const Container = styled.div`
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 760px) {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const inputContainer = styled.div`
    width: 560px;
    height: 105px;
    position: relative;
    
    @media(max-width: 760px) {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Input = styled.input`
    border: 1px solid #5f6368;
    border-radius: 24px;
    width: 560px;
    height: 44px;
    background-color: transparent;
    padding-left: 42px;
    
    @media(max-width: 760px) {
        width: 80vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -50px;
    }
`;

export const Lupa = styled(AiOutlineSearch)`
    position: absolute;
    width: 18px;
    height: 18px;
    color: gray;
    top: 14px;
    left: 14px;

    @media(max-width: 760px) {
        position: absolute;
        width: 15px;
        height: 15px;
        color: gray;
        top: 20px;
        left: 50px;
    }
`;

export const Teclado =  styled(BsKeyboard)`
    width: 22px;
    height: 22px;
    position: absolute;
    top: 11px;
    right: 56px;
    color: gray;
    cursor: pointer;

    @media(min-width: 0px) {
        position: absolute;
        width: 15px;
        height: 15px;
        color: gray;
        top: 20px;
        left: 230px;
    }
    @media(min-width: 375px) {
        position: absolute;
        width: 15px;
        height: 15px;
        color: gray;
        top: 20px;
        left: 270px;
    }

    @media(min-width: 377px) {
        position: absolute;
        width: 16px;
        height: 16px;
        color: gray;
        top: 20px;
        left: 315px;
    }

    @media(min-width: 760px) {
        position: absolute;
        width: 18px;
        height: 18px;
        color: gray;
        top: 15px;
        left: 480px;
    }
`;

export const Mic = styled(BiMicrophone)`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    right: 16px;
    cursor: pointer;
    color: gray;

    @media(min-width: 0px) {
        position: absolute;
        width: 15px;
        height: 15px;
        color: gray;
        top: 20px;
        left: 260px;
    }

    @media(min-width: 375px) {
        position: absolute;
        width: 16px;
        height: 16px;
        color: gray;
        top: 20px;
        left: 300px;
    }

    @media(min-width: 377px) {
        position: absolute;
        width: 16px;
        height: 16px;
        color: gray;
        top: 20px;
        left: 350px;
    }

    @media(min-width: 760px) {
        position: absolute;
        width: 18px;
        height: 18px;
        color: gray;
        top: 15px;
        left: 520px;
    }
`;