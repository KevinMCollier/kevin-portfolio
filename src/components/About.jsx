import { useState, useEffect } from "react";
import Map from "./Map";
import { locations } from "../data";
import { highlights } from "../data";
import './About.css';

export default function About() {
  const [showMap, setShowMap] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * locations.length);
    setCurrentLocation(locations[randomIndex]);
  }, []);

  return (
    <section id="about" className="bg-sand-leather text-gray-100">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 items-center">
          <img
            className="object-cover object-center rounded-full mx-auto w-64 h-64"
            alt="profile"
            src="./cropped-profile.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 flex flex-col sm:items-start md:mb-0">
          <h1 className="title-font sm:text-3xl text-l mb-4 font-bold text-gray-100 text-center md:text-left">
            Career Overview
          </h1>
          {highlights.map((highlight, index) => (
            <div key={index} className="mb-2 text-sm flex w-full sm:w-3/4 border-b border-gray-100 leading-relaxed">
              <p className="w-1/3">{highlight.period}</p>
              <p className="w-2/3">{highlight.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex px-10 md:py-4 md:flex-row flex-col items-center justify-center">
        <div className="mb-8 leading-loose sm:w-3/4 text-semi-bold">
          <h1 className="sm:text-3xl text-lg mb-4 font-bold text-gray-100 text-center md:text-left">
            About Me
          </h1>
          <p className="mb-4 sm:text-lg">I am a Full-Stack Web Developer with a passion for learning.</p>
          <p className="mb-4 sm:text-lg">
            My interest in software engineering started to blossom as I began looking further into potential solutions to problems in the L&D field. I want to have a career where I can contribute hands-on to solutions in both the education field and beyond. My long term goal is to create apps that improve the way we learn and grow.
          </p>
          <p className="mb-4 sm:text-lg">
            Before transitioning into web development, I worked as a supervisor of over 300+ international educators at Tokyo Global Gateway. Leading this initiative taught me how to work within a diverse team while also meeting the high standards of stakeholders such as the Tokyo Metropolitan Board of Education and Gakken Holdings.
          </p>
          <p className="mb-4 sm:text-lg">
            Currently, I am working on developing apps for various projects while also pursuing a full-time role in web development.
            When I am not coding, you can find me walking my dog or eating at one of my favorite restaurants around Tokyo.
          </p>
          <p className="text-lg font-semibold cursor-pointer flashing-text mb-2" onClick={() => setShowMap(!showMap)}>
            {currentLocation && currentLocation.description}, anyone? 👉
          </p>
        </div>
      </div>
        {showMap && <div className="container mx-auto flex px-10 md:py-4 md:flex-row flex-col items-center justify-center sm:w-3/4">
          <Map
            lat={currentLocation && currentLocation.coordinates.lat}
            lng={currentLocation && currentLocation.coordinates.lng}
            address={currentLocation && currentLocation.address}
            name={currentLocation && currentLocation.name}
            link={currentLocation && currentLocation.link}
          />
        </div>}
    </section>
  );
}
