import * as C from './Styles';



export default function Header() {
  return (
    <C.Container>
      <C.Container_nav>
        <C.Link>Gmail</C.Link>
        <C.Link>Imagens</C.Link>
        <C.Icon />
        <C.Img src='/Foto Currículo.jpg' />
      </C.Container_nav>
    </C.Container>
  )
}
