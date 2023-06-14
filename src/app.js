import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-4xl font-bold font-signature">
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
