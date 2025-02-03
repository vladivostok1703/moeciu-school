

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 text-black-900 py-4 shadow-md border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          Școala Gimnazială Moieciu de Jos
        </div>
        <div className="space-x-6 text-lg">
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
            href="/announcements  "
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
      </div>
    </nav>
  );
}
