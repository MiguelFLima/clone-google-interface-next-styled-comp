import styled from "styled-components";

export const Container_Logo = styled.div`
    height: 290px;
    width: 100vw;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media(max-width: 760px) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 230px;
    }
`;

export const Logo = styled.img`
    height: 92px;

    @media(max-width: 376px) {
        width: 190px;
    }
    @media(min-width: 424px) {
        width: 220px;
    }
    @media(min-width: 760px) {
        width: 272px;
    }
`;