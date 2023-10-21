// import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-800 bg-gray-200 body-font">
      <div className="container px-5 py-20 mx-auto text-center lg:px-20">
        <div className="flex flex-col w-full mb-5">
          <h1 className="sm:text-5xl text-2xl font-bold title-font text-gray-800 sm:mb-5">
            My Work
          </h1>
        </div>
        <div className="flex flex-col items-start -m-4">
          {projects.map((project) => (
            <div key={project.image} className="flex flex-col-reverse sm:flex-row w-full sm:p-8 p-4 sm:border-b border-gray-300 items-start">
              <div className="w-full sm:w-1/2 h-80 items-center justify-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    alt="gallery"
                    className="w-full h-auto object-cover object-center shadow-2xl sm:w-full sm:h-80"
                    src={project.image}
                  />
                </a>
              </div>
              <div className="sm:ml-8 mb-6 sm:w-1/2">
                <div className="flex flex-col items-start">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <h2 className="sm:text-2xl sm:text-left mb-2 text-2xl font-bold text-deep-cyan hover:text-sand-leather tracking-wider">{project.title}</h2>
                  </a>
                  <div className="flex flex-wrap py-3 mb-2">
                    {project.stack.map((tech, index) =>(
                      <div key={tech.name} className="sm:text-left mr-3 flex items-center sm:text-lg">
                        <div className="flex items-center">
                          <img src={tech.logo} alt={tech.name} className="w-4 h-4 mr-1" />
                          <p>{tech.name}</p>
                        </div>
                        <div className="ml-2">
                          {index !== project.stack.length - 1 ? ' |' : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-left sm:text-lg font-semibold">Overview:</p>
                  <p className="text-left text-s mb-6 sm:text-lg leading-loose">
                    {project.description}
                  </p>
                </div>
              </div>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
