export default function Navbar() {
  return (
    <header className="bg-midnight-navy md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        {/* Brand */}
        <a href="#banner"
           className="title-font font-semibold text-off-white text-3xl sm:text-4xl tracking-tight
                      hover:text-copper-rust transition">
          Collier Consulting
        </a>

        {/* Links */}
        <nav className="md:ml-6 md:py-1 md:pl-6 md:border-l md:border-off-white/20
                        flex flex-wrap items-center text-base text-off-white">
          <a href="#projects" className="mr-6 hover:text-copper-rust transition">
            The&nbsp;Coach&nbsp;Call
          </a>
          <a href="#about" className="mr-6 hover:text-copper-rust transition">
            About
          </a>
        </nav>

        {/* CTA */}
        <a href="#contact"
           className="ml-auto inline-flex items-center
                      py-1.5 px-4 rounded border-2 border-copper-rust
                      text-off-white hover:bg-copper-rust hover:text-off-white transition">
          Contact&nbsp;Me
        </a>

      </div>
    </header>
  );
}
