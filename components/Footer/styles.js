import styled from "styled-components";

export const ContainerMajor = styled.div`
  margin-top: 344.5px;

  @media (max-width: 760px) {
    width: 100vw;
    margin-top: 250px;
    font-size: 11px;
  }
  @media (min-width: 760px) {
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 48px;
  border-bottom: 1px solid #3c4043;
  background-color: #181818;
  display: flex;
  align-items: center;
  margin-top: auto;

  @media (max-width: 760px) {
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

  @media (max-width: 760px) {
    width: 100vw;
    height: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Container_itens = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 760px) {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    background-color: transparent;
    justify-content: flex-start;
    margin-left: 1rem;
}
`;

export const Itens = styled.p`
  color: #808080;
  font-size: 15px;
  margin-inline: 1rem;

  @media (max-width: 760px) {
    font-size: 12px;
  }

  @media (min-width: 761px){
    font-size: 11px;
  }
`;

export const Container_outros_items = styled.div`
  display: flex;
  align-items: center;
  border-bottom: none;
  background-color: #181818;
  width: 100vw;

  @media (max-width: 760px) {
    display: flex;
    align-items: center;
  }
  @media (min-width: 0px) and (max-width: 320px) {
    height: 5px;
    margin-bottom: 10px;
  }

  @media (min-width: 760px) and (max-width: 1024px){
    background-color: transparent;
    justify-content: flex-end;
    margin-top: -45px;
  }

  @media (min-width: 1024px) {
    background-color: transparent;
    justify-content: flex-end;
    margin-right: 1rem;
    margin-top: -45px;
  }
`;

export const outros_items = styled.p`
  font-size: 15px;
  color: #808080;
  margin-inline: 1rem;

  @media (max-width: 760px) {
    font-size: 12px;
  }

  @media (min-width: 761px){
    font-size: 11px;
  }
`;
