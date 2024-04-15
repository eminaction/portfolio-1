import "./App.css";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import Portfolio from "./Portfolio/Portfolio";
import Menu from "./Menu/Menu";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import About from "./About/About";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
