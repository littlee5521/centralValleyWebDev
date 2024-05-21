import { roboto } from "./fonts";
import Link from "next/link";

export default function NavBar() {
  //

  return (
    <nav className="block md:flex w-full  justify-between text-2xl text-white text-center pb-10 ">
      <div className="mb-2 md:mb-0 flex items-center justify-center">
        <Link
          className="border-2 border-transparent text-center block px-4 py-2 hover:border-blue-800 rounded-full transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-800"
          href={"/"}
        >
          <h1>Central Valley Web Development LLC</h1>
        </Link>
      </div>
      <div className="block md:flex gap-3">
        <Link
          className="border-2 border-transparent text-center block px-4 py-2 hover:border-blue-800 rounded-full transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-800"
          href={"/aboutUs"}
        >
          <p>About Us</p>
        </Link>
        <Link
          className="border-2 border-transparent text-center block px-4 py-2 hover:border-blue-800 rounded-full transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-800"
          href={"/services"}
        >
          <p>Services</p>
        </Link>
        <Link
          className="border-2 border-transparent text-center block px-4 py-2 hover:border-blue-800 rounded-full transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-800"
          href={"/contactUs"}
        >
          <p>Contact Us</p>
        </Link>
      </div>
    </nav>
  );
}
