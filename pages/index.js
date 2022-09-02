import Buttons from "../components/Buttons/Buttons";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Logo from '../components/Logo/Logo';
import Nota from "../components/Nota/Nota";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
  return (
    <>
      <Header />
      <Logo />
      <SearchBar />
      <Buttons />
      <Nota />
      <Footer />
    </>
  )
}
