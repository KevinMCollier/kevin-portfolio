// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#banner" className="ml-3 text-4xl hover:text-yellow-300">
            Kevin Collier
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base text-white justify-center">
          <a href="#projects" className="mr-5 hover:text-yellow-300">
            Past Work
          </a>
          <a href="#about" className="mr-5 hover:text-yellow-300">
            About Me
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:text-yellow-300 rounded text-base text-white mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
