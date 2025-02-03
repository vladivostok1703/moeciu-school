import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 text-black-900 py-4 shadow-md border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          Școala Gimnazială Moieciu de Jos
        </div>
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-blue-600 transition duration-300">
            Acasă
          </Link>
          <Link
            href="/about"
            className="hover:text-black-600 transition duration-300"
          >
            Despre Noi
          </Link>
          <Link
            href="/announcements"
            className="hover:text-black-600 transition duration-300"
          >
            Anunțuri
          </Link>
          <Link
            href="/contact"
            className="hover:text-black-600 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-100 space-y-4 text-center py-4`}
      >
        <Link
          href="/"
          className="block hover:text-blue-600 transition duration-300"
        >
          Acasă
        </Link>
        <Link
          href="/about"
          className="block hover:text-black-600 transition duration-300"
        >
          Despre Noi
        </Link>
        <Link
          href="/announcements"
          className="block hover:text-black-600 transition duration-300"
        >
          Anunțuri
        </Link>
        <Link
          href="/contact"
          className="block hover:text-black-600 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
