// src/components/Navbar.js

// import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#banner" className="ml-3 text-4xl hover:text-sand-leather">
            Kevin Collier
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base text-white justify-center">
          <a href="#projects" className="mr-5 hover:text-sand-leather">
            Past Work
          </a>
          <a href="#about" className="mr-5 hover:text-sand-leather">
            About Me
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:text-sand-leather rounded text-base text-white mt-4 md:mt-0">
          Contact Me
        </a>
      </div>
    </header>
  );
}
