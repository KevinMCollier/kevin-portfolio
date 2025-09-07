import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services"
import Audience from "./components/Audience"
// import CoachCall from "./components/CoachCall";
import CoachCallDetails from "./components/CoachCallDetails";
import Process from "./components/Process";
// import StatsGrid from "./components/StatsGrid";

function App() {

  return (
    <>
      <div className="App text-gray-800 bg-gray-200 body-font">
        <Navbar />
        <Banner />
        <Services />
        <Audience />
        <Process />
        {/* <StatsGrid /> */}
        {/* <CoachCall /> */}
        <CoachCallDetails />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
