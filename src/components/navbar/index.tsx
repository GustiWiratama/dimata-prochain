import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <div>
      <nav className="flex w-full justify-between p-10 px-28 text-xl items-center bg-transparent text-white">
        <Link href="/">
          <div className="title text-3xl font-bold cursor-pointer text-red-500">
            Pro<span className="text-amber-500">Chain</span>
          </div>
        </Link>
        <div className="menu">
          <ul className="flex text-center items-center">
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
            <li className="pl-6 pr-6 flex text-center items-center justify-center bg-amber-500 h-10 cursor-pointer hover:scale-105 transition duration-100">
              Login
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
