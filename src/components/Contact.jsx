import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative h-screen">
      <div className="container px-5 py-5 mx-auto flex flex-col justify-center">
        <h2 className="text-gray-800 sm:text-3xl text-2xl py-20 font-medium text-center">
          Get in touch with me on social media
        </h2>
        <div className="justify-center text-center">
          <div className="inline-block mr-10 text-3xl hover:text-cyan-700">
            <a href="https://github.com/KevinMCollier" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
          <div className="inline-block text-3xl hover:text-cyan-700">
            <a href="https://www.linkedin.com/in/kevin-collier/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <form
          data-netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-2/3 md:w-full flex flex-wrap w-full md:py-8 mt-8 md:mt-0">
          <input type="hidden" name="form-name" value="contact" />
          <h2 className="text-gray-800 sm:text-3xl text-2xl mb-4 font-medium title-font w-full text-center">
            ... Or send me a message here <span role="img" aria-label="memo">📝</span>
          </h2>
          <div className="md:w-1/2 pr-4 mb-4">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-300 rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-300 rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-300 rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-700 h-40 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg md:float-right">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
