import styled from "styled-components";

export const Container = styled.div`
    width: 584px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
`;

export const Buttons = styled.button`
    width: 136px;
    height: 38px;
    margin-inline: 0.4rem;
    color: white;
    border: 1px solid #303134 ;
    background-color: #303134;
    border-radius: 5px;
    margin-top: -160px;
    font-size: 14px;
    cursor: pointer;
    :hover {
        border: 0.5px solid gray;
    }
`;