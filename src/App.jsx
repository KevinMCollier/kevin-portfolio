// import React from "react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="App text-gray-800 bg-gray-200 body-font">
        <Navbar />
        <Banner />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
