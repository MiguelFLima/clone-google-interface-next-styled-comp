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
    width: 272px;
    height: 92px;

    @media(max-width: 760px) {
        width: 160px;
    }
`;