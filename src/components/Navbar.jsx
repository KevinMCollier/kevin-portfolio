import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-midnight-navy sticky top-0 z-20">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        <a
          href="#banner"
          className="font-mont font-semibold text-off-white text-2xl sm:text-3xl tracking-tight hover:text-copper-rust transition"
        >
          Collier Consulting
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="md:hidden text-off-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-off-white ml-auto">
          <a href="#CoachCall" className="hover:text-copper-rust transition">
            The&nbsp;Coach&nbsp;Call
          </a>
          <a href="#about" className="hover:text-copper-rust transition">
            About
          </a>
          <a
            href="#contact"
            className="inline-flex items-center py-1.5 px-4 rounded border-2 border-copper-rust hover:bg-copper-rust transition"
          >
            Contact&nbsp;Me
          </a>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="md:hidden bg-midnight-navy px-5 pb-6 space-y-4 text-off-white text-lg">
          <a
            href="#CoachCall"
            onClick={() => setOpen(false)}
            className="block w-full hover:text-copper-rust transition"
          >
            The Coach Call
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block w-full hover:text-copper-rust transition"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-block mt-2 border-2 border-copper-rust py-2 px-4 rounded hover:bg-copper-rust transition"
          >
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
}
