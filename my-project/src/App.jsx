import Nav_bar from "./components/Nav_bar";

import "./App.css";

import Cards from "./components/Cards";
import ContainerComponent from "./components/Container/ContainerComponent";
import Logo from "./components/Logo/Logo";
import Title from "./components/title/Title";

function App() {
  return (
    <>
      <Nav_bar>
        <Logo />
      </Nav_bar>
      <ContainerComponent></ContainerComponent>
      <Title></Title>
      <Cards></Cards>
    </>
  );
}

export default App;
