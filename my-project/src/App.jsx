import Nav_bar from "./components/Nav_bar";
import "./App.css";
import Cards from "./components/cards/Cards";
import ContainerComponent from "./components/Container/ContainerComponent";
import Logo from "./components/Logo/Logo";
import Title from "./components/title/Title";
import Greeting from "./components/greeting/Greeting";
import SectionComponent from "./components/section/SectionComponent";
import ContactoForm from "./components/contactoForm/ContactoForm";
import { FooterComponent } from "./components/footer/FooterComponent";
import About from "./components/About/About";
import AnimatedButton from "./components/button/AnimatedButton";

function App() {
  return (
    <>
      <Nav_bar>
        <Logo />
      </Nav_bar>

      {/* Sección Home */}
      <ContainerComponent
        className="flex justify-center space-x-4 flex-wrap"
        id="home"
      >
        <Greeting />
      </ContainerComponent>

      <ContainerComponent className="flex justify-center space-x-4 flex-wrap">
        <About id={"about"}></About>
      </ContainerComponent>

      {/* Sección Proyectos */}
      <Cards id="projects">
        <Title title="Proyectos" />
      </Cards>
      <SectionComponent id="contact">
        <Title title="Contacto" />
        <ContactoForm />
      </SectionComponent>
      <AnimatedButton title="Descargar CV" />

      {/* Sección Contacto */}

      <FooterComponent />
    </>
  );
}

export default App;
