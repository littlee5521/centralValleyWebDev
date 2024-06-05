import { merriweather, raleway } from "./fonts";
import Link from "next/link";

export default function NavBar() {
  //

  return (
    <nav className="block md:flex w-full gap-5 pt-4 md:pt-12  justify-between text-xl text-white text-center px-12 pb-10 tracking-wider ">
      <div className="mb-2 md:mb-0 flex items-center justify-center">
        <Link
          className="border-2 border-transparent text-center block px-4 py-2 hover:border-white border-b border-b-white transition duration-200 ease-in-out focus:outline-none focus:ring-2"
          href={"/"}
        >
          <h1 className={`${merriweather.className}`}>
            Central Valley Web Development LLC
          </h1>
        </Link>
      </div>
      <div className="block md:flex gap-3">
        <Link
          className={`border-2 border-transparent border-b border-b-white   ${raleway.className} text-center block px-4 py-2 hover:border-white transition duration-200 ease-in-out focus:outline-none focus:ring-2`}
          href={"/portfolio"}
        >
          <p>Portfolio</p>
        </Link>
        <Link
          className={`border-2 border-transparent border-b border-b-white   ${raleway.className} text-center block px-4 py-2 hover:border-white transition duration-200 ease-in-out focus:outline-none focus:ring-2`}
          href={"/aboutUs"}
        >
          <p>About Us</p>
        </Link>
        <Link
          className={`border-2 border-transparent border-b border-b-white   ${raleway.className} text-center block px-4 py-2 hover:border-white  transition duration-200 ease-in-out focus:outline-none focus:ring-2`}
          href={"/services"}
        >
          <p>Services</p>
        </Link>
        <Link
          className={`border-2 border-transparent border-b border-b-white   ${raleway.className} text-center block px-4 py-2 hover:border-white  transition duration-200 ease-in-out focus:outline-none focus:ring-2`}
          href={"/contactUs"}
        >
          <p>Contact Us</p>
        </Link>
      </div>
    </nav>
  );
}
