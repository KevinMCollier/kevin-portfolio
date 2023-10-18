// import React from "react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {

  return (
    <>
      <div className="App text-gray-800 bg-gray-100 body-font">
        <Navbar />
        <Banner />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  )
}

export default App
