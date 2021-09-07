import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Section from "./components/Section/Section";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Section id="about" title={"About"} odd={true}>
        <About />
      </Section>
      <Section id="experience" title={"Experience"} odd={false}>
        <p>ivan</p>
      </Section>
      <Section id="devportfolio" title={"Dev Portfolio"} odd={true}>
        <p>ivan</p>
      </Section>
      <Section id="contact" title={"Contact"} odd={false}>
        <p>ivan</p>
      </Section>
    </div>
  );
}

export default App;
