// src/components/Footer.js

// import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <header className="bg-deep-cyan md:sticky top-0 z-10">
      <div className="container mx-auto p-5">
        <p
          className="text-right border-0 py-1 px-3 focus:outline-none hover:text-sand-leather rounded text-base text-white mt-4 md:mt-0">
          &copy; 2023 Kevin Collier. All rights reserved.
          {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
        </p>
      </div>
    </header>
  );
}
