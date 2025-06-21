import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import CoachCall from "./components/CoachCall";
import CoachCallDetails from "./components/CoachCallDetails";
import Approach from "./components/Approach";
import StatsGrid from "./components/StatsGrid";

function App() {

  return (
    <>
      <div className="App text-gray-800 bg-gray-200 body-font">
        <Navbar />
        <Banner />
        <Approach />
        <StatsGrid />
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
