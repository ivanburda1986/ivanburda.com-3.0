import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Section id="about" title={"About"} odd={true}>
        <p>ivan</p>
      </Section>
      <Section id="experience" title={"Experience"} odd={false}>
        <p>ivan</p>
      </Section>
      <Section id="devportfolio" title={"Dev Portfolio"} odd={true}>
        <p>ivan</p>
      </Section>
      <Section id="blog" title={"Blog"} odd={false}>
        <p>ivan</p>
      </Section>
    </div>
  );
}

export default App;
