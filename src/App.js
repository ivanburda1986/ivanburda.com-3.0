import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Frontpage from "./components/Frontpage/Frontpage";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Frontpage />
      <Section />
    </div>
  );
}

export default App;
