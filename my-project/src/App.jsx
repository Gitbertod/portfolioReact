import Nav_bar from "./components/Nav_bar";

import "./App.css";

import Cards from "./components/Cards";
import ContainerComponent from "./components/ContainerComponent";

function App() {
  return (
    <div>
      <Nav_bar></Nav_bar>
      <ContainerComponent></ContainerComponent>

      <Cards></Cards>
    </div>
  );
}

export default App;
