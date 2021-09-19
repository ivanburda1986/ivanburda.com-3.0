import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Section from "./components/Section/Section";
import About from "./components/About/About";
import DevPortfolio from "./components/DevPortfolio/DevPortfolio";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import MobileNavigation from "./components/Navigation/MobileNavigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MobileNavigation />
      <Section id="about" title={"About"} odd={true}>
        <About />
      </Section>
      <Section id="experience" title={"Experience"} odd={false}>
        <Experience />
      </Section>
      <Section id="devportfolio" title={"Dev Portfolio"} odd={true}>
        <DevPortfolio />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
