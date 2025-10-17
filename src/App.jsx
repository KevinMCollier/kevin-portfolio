import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Painpoints from "./components/Painpoints"
import HowIHelp from "./components/HowIHelp";
import StatsGrid from "./components/StatsGrid";
import CoachCall from "./components/CoachCall"
import CoachCallDetails from "./components/CoachCallDetails"

function App() {

  return (
    <>
      <div className="App text-gray-800 bg-gray-200 body-font">
        <Navbar />
        <Banner />
        <Painpoints />
        <StatsGrid />
        <HowIHelp />
        <CoachCall />
        <CoachCallDetails />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
