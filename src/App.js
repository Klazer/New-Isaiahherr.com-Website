import React, { Component } from "react";
import { Navigationbar } from "./components/layout/Navigationbar";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { About } from "./components/modules/About";
import { Experience } from "./components/modules/Experience";
import { Projects } from "./components/modules/Projects";
import { Contact } from "./components/modules/Contact";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Navigationbar />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
