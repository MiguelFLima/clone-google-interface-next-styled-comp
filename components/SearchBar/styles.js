import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsKeyboard } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi'

export const Container = styled.div`
    height: 160px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const inputContainer = styled.div`
    width: 560px;
    height: 105px;
    position: relative;
`;

export const Input = styled.input`
    border: 1px solid #5f6368;
    border-radius: 24px;
    width: 560px;
    height: 44px;
    background-color: transparent;
    padding-left: 42px;
    
`;

export const Lupa = styled(AiOutlineSearch)`
    position: absolute;
    width: 18px;
    height: 18px;
    color: gray;
    top: 14px;
    left: 14px;
`;

export const Teclado =  styled(BsKeyboard)`
    width: 22px;
    height: 22px;
    position: absolute;
    top: 11px;
    right: 52px;
    color: gray;
    cursor: pointer;
`;

export const Mic = styled(BiMicrophone)`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    right: 16px;
    cursor: pointer;
    color: gray;
`;