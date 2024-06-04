"use client";

import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";

export default function PortfolioHeader() {
  return (
    <section className=" px-5 text-center pt-10 bg-white">
      <div className=" m-auto max-w-screen-xl">
        <h1 className=" text-4xl font-bold">Our Work</h1>
        <p className=" text-xl py-5">
          At Central Valley Web Development, we specialize in creating
          lightning-fast, responsive websites tailored to meet your unique
          business needs. Our expertise in Next.js allows us to deliver custom
          solutions that not only look great but also perform exceptionally well
          across all devices. Explore our portfolio to see how we`ve helped
          clients achieve their digital goals with speed, efficiency, and
          innovation.
        </p>
        <div className="card_section text-white">
          <div className="card-wrapper flex justify-center py-5">
            <Popover.Root>
              <Popover.Trigger asChild>
                <button className=" w-2/4 hover:scale-105 transition-all duration-300 ease-in-out px-4 py-6 bg-black card">
                  <h2 className=" text-2xl pb-5">Just By Chance Cleaning</h2>
                  <Image
                    alt="a photo of a website"
                    height={100}
                    width={900}
                    src={"/justByChance_Home_Desktop.jpg"}
                  />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content>
                  <h1>Hello</h1>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
