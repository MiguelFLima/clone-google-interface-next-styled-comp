import styled from "styled-components";


export const ContainerMajor = styled.div`
    margin-top: 344.5px;

    @media(max-width: 760px) {
        width: 100vw;
        margin-top: 250px;
        font-size: 11px
    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 48px;
    border-bottom: 1px solid #3c4043;
    background-color: #181818;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: auto;

    @media(max-width: 760px) {
        width: 100vw;


    }
`;
    


export const Locate = styled.p`
    font-size: 12px;
    color: #808080;
    margin-left: 2rem;
`;

export const Container_itens_principal = styled.div`
    width: 100vw;
    height: 48px;
    background-color: #181818;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: auto;

    @media(max-width: 760px) {
        width: 100vw;
        height: 110px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Container_itens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 760px) {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Itens = styled.p`
    color: #808080;
    font-size: 15px;
    margin-left: 2rem;

    @media(max-width: 760px) {
        font-size: 12px
    }
`;

export const Container_outros_items = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: none;

    @media(max-width: 760px) {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const outros_items = styled.p`
    font-size: 15px;
    color: #808080;
    margin-right: 2rem;

    @media(max-width: 760px) {
        font-size: 12px
    }
`;  