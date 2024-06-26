import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "./ui/fonts";
import NavBar from "./ui/navbar";

export const metadata: Metadata = {
  title: "Central Valley Web Development",
  description:
    "Central Valley Web Development offers top-notch web development services for small businesses and trades in the Fresno area. We provide competitive pricing and customized solutions to help your business thrive online. Contact us today to enhance your online presence with our expert services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
