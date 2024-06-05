"use client";
import Carousel from "./carasoul";
import Link from "next/link";
import { merriweather, raleway } from "../../ui/fonts";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

export default function PortfolioHeader() {
  return (
    <section className="px-5 text-center pt-10 bg-white">
      <div className="m-auto max-w-screen-xl">
        <h1 className="text-4xl font-bold">Our Work</h1>
        <p className="text-xl py-5">
          At Central Valley Web Development, we specialize in creating
          lightning-fast, responsive websites tailored to meet your unique
          business needs. Our expertise in Next.js allows us to deliver custom
          solutions that not only look great but also perform exceptionally well
          across all devices. Explore our portfolio to see how we`ve helped
          clients achieve their digital goals with speed, efficiency, and
          innovation.
        </p>
        <div className="card_section text-white">
          <div className="card-wrapper block md:flex justify-center py-5">
            <div className=" bg-black pb-10 mx-auto hover:scale-105 transition-all duration-300 ease-in-out px-4 py-6">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className=" mx-auto bg-black card">
                    <h2 className="text-2xl pb-5">Just By Chance Cleaning</h2>
                    <Image
                      height={1000}
                      width={1000}
                      alt="A photo of a website"
                      src={"/home_mobile.png"}
                      className=" m-auto md:hidden"
                    />
                    <Image
                      className=" hidden md:block"
                      alt="a photo of a website"
                      height={1000}
                      width={1000}
                      src={"/justByChance_Home_Desktop.jpg"}
                    />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                  <Dialog.Content className="fixed inset-0 p-2 md:p-10 flex text-center items-center justify-center">
                    <div className="relative text-white bg-black border border-white w-full h-full p-4">
                      <Dialog.Close className="absolute top-2 right-2">
                        X
                      </Dialog.Close>
                      <h1 className="text-2xl mt-10 font-bold mb-4">
                        Just By Chance Cleaning
                      </h1>
                      <Carousel
                        images={[
                          {
                            desktop: "/justByChance_Home_Desktop.png",
                            mobile: "/home_mobile.png",
                          },
                          {
                            desktop: "/justByChance_Services_Desktop.png",
                            mobile: "/JustByChance_Services_Mobile.png",
                          },
                          {
                            desktop: "/JustByChance_About-Us_Desktop.png",
                            mobile: "/JustByChance_About-Us_Mobile.png",
                          },
                          {
                            desktop: "/JustByChance_Contact-Us_Desktop.png",
                            mobile: "/JustByChance_Contact-Us_Mobile.png",
                          },
                        ]}
                      />
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
              <Link
                className={`border-2 mt-10 border-transparent  sm:w-2/5 m-auto border-white   ${raleway.className} text-center block px-4 py-2 hover:border-white transition duration-200 ease-in-out`}
                href={"https://justbychancecleaning.com"}
                target="_blank"
              >
                <p>Visit Site</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
