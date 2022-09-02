import * as C from "./styles";

export default function Footer() {
  return (
    <C.ContainerMajor>
      <C.Container>
        <C.Locate>Brasil</C.Locate>
      </C.Container>

      
      <C.Container_itens_principal>

        <C.Container_itens>
          <C.Itens>Sobre</C.Itens>
          <C.Itens>Publicidade</C.Itens>
          <C.Itens>Negócios</C.Itens>
          <C.Itens>Como funciona a Pesquisa</C.Itens>
        </C.Container_itens>

        <C.Container_outros_items>
          
          <C.outros_items>Privacidade</C.outros_items>
          <C.outros_items>Termos</C.outros_items>
          <C.outros_items>Configurações</C.outros_items>
        </C.Container_outros_items>

      </C.Container_itens_principal>

    </C.ContainerMajor>
  );
}
