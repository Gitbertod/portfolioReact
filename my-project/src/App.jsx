import Nav_bar from "./components/Nav_bar";
import "./App.css";
import Cards from "./components/Cards";
import ContainerComponent from "./components/Container/ContainerComponent";
import Logo from "./components/Logo/Logo";
import Title from "./components/title/Title";
import Greeting from "./components/greeting/Greeting";
import SectionComponent from "./components/section/SectionComponent";
import ContactoForm from "./components/contactoForm/ContactoForm";
import { FooterComponent } from "./components/footer/FooterComponent";

function App() {
  return (
    <>
      <Nav_bar>
        <Logo />
      </Nav_bar>
      <ContainerComponent className=" flex justify-center space-x-4 flex-wrap">
        <Greeting />
      </ContainerComponent>
      <Cards>
        <Title title="Projects" />
      </Cards>
      <SectionComponent>
        <Title title="Contact" />
        <ContactoForm />
      </SectionComponent>
      <FooterComponent />
    </>
  );
}

export default App;
