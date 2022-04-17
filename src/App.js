import { Header, Footer } from "./components/";
import Summary from "./sections/summary";
import Skills from "./sections/skills";
import Experience from "./sections/experience";
import Education from "./sections/education";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="sections">
        <Summary />
        <Skills />
        <Experience />
        <Education />
      </div>
      <Footer />
    </div>
  );
}

export default App;
