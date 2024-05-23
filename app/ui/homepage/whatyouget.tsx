import { raleway, merriweather } from "../fonts";
import Link from "next/link";

export default function WhatYouGet() {
  return (
    <section className=" w-full flex flex-col items-center md:items-stretch text-center">
      <h2
        className={` ${merriweather.className}  w-fit px-5 m-auto font-bold text-white mt-12 mb-16 text-4xl`}
      >
        Our Solutions
      </h2>
      <div className=" justify-around block md:flex">
        <div className=" bg-white mb-16 m-auto md:m-0 w-fit py-10 px-14">
          <h3 className={` ${merriweather.className} text-2xl font-bold py-3`}>
            One-Time Payment
          </h3>
          <ul className=" text-xl">
            <li className="py-3 border-b border-black">Starts at $1500</li>
            <li className="py-3 border-b border-black">
              Complete Ownership Transfer
            </li>
            <li className="py-3 border-b border-black">
              Customizable to Your Needs
            </li>
            <li className="py-3 border-b border-black">One-Time Payment</li>
            <li className="py-3 border-b border-black">Dedicated Support</li>
            <li className="py-3 border-b border-black">Quick Turnaround</li>
          </ul>
          <Link
            href={"/contactUs"}
            className="border-2 my-5 text-xl m-auto bg-black text-white shadow-2xl text-center block px-4 py-2 focus:outline-none focus:ring-2 duration-300 transition-colors hover:bg-white hover:border-black hover:text-black"
          >
            Get In Contact
          </Link>
        </div>
        <div className="bg-white mb-16 m-auto md:m-0 w-fit py-10 px-10">
          <h3 className={` ${merriweather.className} text-2xl font-bold py-3`}>
            Monthly Plan
          </h3>
          <ul className=" text-xl">
            <li className="py-3 border-b border-black">$150 Per Month</li>
            <li className="py-3 border-b border-black">
              Buyout Option Available
            </li>
            <li className="py-3 border-b border-black">Unlimited Revisions</li>
            <li className="py-3 border-b border-black">
              Six-Month Minimum Commitment
            </li>
            <li className="py-3 border-b border-black">
              24/7 Editing Services
            </li>
            <li className="py-3 border-b border-black">No Deposit Required</li>
          </ul>
          <Link
            href={"/contactUs"}
            className="border-2 my-5 text-xl m-auto bg-black text-white shadow-2xl text-center block px-4 py-2 duration-300 transition-colors hover:bg-white hover:border-black hover:text-black focus:outline-none focus:ring-2"
          >
            Get In Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
