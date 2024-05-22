import { Merriweather } from "next/font/google";
import { merriweather } from "../fonts";

export default function AboutUsHeader() {
  return (
    <section className=" bg-white min-w-full text-black text-xl pb-6 pt-14 px-12">
      <h2 className={`  text-4xl text-center `}>About Us</h2>
      <h3 className=" font-bold text-2xl my-5">
        Welcome to Central Valley Web Development LLC
      </h3>
      <p>
        At Central Valley Web Development LLC, we are passionate about creating
        cutting-edge web solutions that drive success for businesses of all
        sizes. Our team Is dedicated to delivering top-notch services tailored
        to meet the unique needs of our clients.
      </p>
      <h3 className=" font-bold text-2xl my-5">Our Mission</h3>
      <p>
        Our mission is to empower businesses with innovative web solutions that
        enhance their online presence and achieve their goals. We strive to
        provide exceptional service and deliver results that exceed
        expectations.
      </p>
      <h3 className=" font-bold text-2xl my-5">Our Values</h3>
      <ul className=" list-disc list-inside">
        <li className=" my-1">
          <span className=" font-semibold">Innovation: </span>
          We stay at the forefront of technology trends to provide our clients
          with the most advanced solutions.
        </li>
        <li className=" my-1">
          <span className=" font-semibold">Quality: </span>
          We are committed to delivering high-quality work that meets the
          highest standards of excellence.
        </li>
        <li className=" my-1">
          <span className=" font-semibold">Customer-Centric: </span>
          Our clients are at the heart of everything we do. We listen to their
          needs and work collaboratively to achieve their objectives.
        </li>
        <li className=" my-1">
          <span className=" font-semibold">Integrity: </span>
          We conduct our business with honesty and transparency, building
          lasting relationships based on trust.
        </li>
      </ul>
      <h2 className={`  text-4xl text-center pb-6 pt-14 `}>Our Tech Stack</h2>
      <p>
        At Central Valley Web Development LLC, we leverage a robust and modern
        technology stack to build high-performing and scalable web solutions.
        Our choice of tools and platforms ensures that we deliver efficient,
        secure, and reliable products to our clients.
      </p>
      <h3 className=" font-bold text-2xl my-5">Next.js</h3>
      <ul className="list-disc list-inside">
        We utilize Next.js as our primary framework for building web
        applications. Next.js offers numerous benefits, including:
        <li className=" my-1">
          <span className=" font-semibold">Server-Side Rendering (SSR): </span>
          Enhances performance and SEO by rendering pages on the server.
        </li>
        <li className=" my-1">
          <span className=" font-semibold">Static Site Generation (SSG): </span>
          Provides the best of both worlds with fast load times and dynamic
          content.
        </li>
        <li className=" my-1">
          <span className=" font-semibold">Rich Ecosystem: </span>
          Integrates seamlessly with React and other modern JavaScript
          libraries.
        </li>
      </ul>
      <h3 className=" font-bold text-2xl my-5">Vercel</h3>
      <ul className="list-disc list-inside">
        For deployment, we trust Vercel, a platform designed for the optimal
        performance of Next.js applications. Vercel offers:
        <li className=" my-1">
          <span className=" font-semibold">Global CDN: </span>
          Ensures your website is fast and responsive by distributing content
          across the globe.
        </li>
        <li className=" my-1">
          <span className=" font-semibold">Automatic Scalability: </span>
          Handles traffic spikes effortlessly, providing a smooth user
          experience.
        </li>
      </ul>
      <h3 className=" font-bold text-2xl my-5">Why This Stack?</h3>
      <ul className="list-disc list-inside">
        <li className=" my-1">
          <span className=" font-semibold">Performance: </span>
          The combination of Next.js and Vercel ensures fast, responsive, and
          scalable applications.
        </li>
        <li className=" my-1">
          <span className=" font-semibold">Modern Development: </span>
          Leveraging the latest technologies ensures our solutions are
          cutting-edge and future-proof.
        </li>
        <li className=" my-1">
          <span className=" font-semibold">Efficiency: </span>
          Streamlined development and deployment processes enable us to deliver
          projects quickly and effectively.
        </li>
      </ul>
      <h3 className=" font-bold text-2xl my-5">Commitment to Quality</h3>
      <p>
        Our choice of technology reflects our commitment to providing
        high-quality solutions that meet the needs of our clients. By staying
        current with technological advancements, we ensure that your business
        benefits from the best tools and practices in the industry.
      </p>
    </section>
  );
}
