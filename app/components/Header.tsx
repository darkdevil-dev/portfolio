import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            <Image
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link
                href="#home"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#about"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                About
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#experience"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Experience
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#projects"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Projects
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#contact"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Contact
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="https://bit.ly/aman__cv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Download CV ↓
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}