import * as C from'./styles';

function SearchBar() {
  return (
    <C.Container>
        <C.inputContainer>
            <C.Lupa></C.Lupa>
            <C.Input></C.Input>
            <C.Teclado></C.Teclado>
            <C.Mic></C.Mic>
        </C.inputContainer>
    </C.Container>
  )
}

export default SearchBar;