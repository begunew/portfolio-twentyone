import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./App.css";

import { Helmet } from "react-helmet";
const title = "Bee Lee | Front-end & Back-end Developer";

function App() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
