import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const isActive = (path: string) => router.pathname === path;

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      // 100vh bagi 2 = 50vh
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`flex fixed w-full justify-between p-5 md:px-28 text-xl items-center transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-70" : "bg-transparent"
        } text-white`}
      >
        <Link href="/">
          <div className="title text-3xl font-bold cursor-pointer text-red-500 pridi-regular">
            Pro<span className="text-amber-500">Chain</span>
          </div>
        </Link>
        <div className="menu relative">
          <button className="md:hidden" onClick={toggleDropdown}>
            <span className="text-3xl">{isDropdownOpen ? "×" : "☰"}</span>
          </button>

          {/* Menu Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 bg-black bg-opacity-80 rounded-md shadow-lg z-10 md:hidden">
              <ul className="flex flex-col text-center">
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/")
                      ? "text-amber-500 text-opacity-70"
                      : "hover:text-amber-500"
                  }`}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/about")
                      ? "text-amber-500 text-opacity-70"
                      : "hover:text-amber-500"
                  }`}
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/services")
                      ? "text-amber-500 text-opacity-70"
                      : "hover:text-amber-500"
                  }`}
                >
                  <Link href="/services">Services</Link>
                </li>

                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/contact")
                      ? "text-amber-500 text-opacity-70"
                      : "hover:text-amber-500"
                  }`}
                >
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="px-4 py-2 flex text-center items-center justify-center bg-amber-500 bg-opacity-70 rounded cursor-pointer">
                  Login
                </li>
              </ul>
            </div>
          )}
          <ul className="hidden md:flex text-center items-center">
            <li
              className={`px-3 cursor-pointer ${
                isActive("/")
                  ? "text-amber-500 text-opacity-70"
                  : "hover:text-amber-500 "
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`px-3 cursor-pointer ${
                isActive("/about")
                  ? "text-amber-500 text-opacity-70"
                  : "hover:text-amber-500"
              }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`px-3 cursor-pointer ${
                isActive("/services")
                  ? "text-amber-500 text-opacity-70"
                  : "hover:text-amber-500"
              }`}
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              className={`px-3 cursor-pointer ${
                isActive("/contact")
                  ? "text-amber-500 text-opacity-70"
                  : "hover:text-amber-500"
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li className="pl-6 pr-6 flex text-center items-center justify-center rounded-full bg-amber-500 h-10 cursor-pointer hover:scale-105 transition duration-100">
              Login
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
