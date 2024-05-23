import { merriweather } from "../ui/fonts";

export default function Page() {
  return (
    <main className="items-center justify-between mt-11 text-xl pb-5 bg-black text-white">
      <div className=" max-w-7xl mb-8 md:mb-0  px-4 pb-4 m-auto pt-2 text-black bg-white w-full">
        <h2
          className={`  text-center text-black font-bold px-5 m-auto mt-12 mb-8 text-4xl`}
        >
          One-Time Payment Option
        </h2>
        <p className="mb-5">
          Our One-Time Payment option provides a comprehensive, custom-built
          solution tailored to meet your specific needs. This package is ideal
          for businesses seeking a robust, fully owned web presence without
          recurring fees. Here’s what you can expect:
        </p>
        <ul className=" list-disc list-inside">
          <li className=" my-3">
            <span className=" font-semibold">Modern Frameworks: </span>
            We build your solution using the latest and most reliable frameworks
            and technologies. This ensures that your website or application is
            not only cutting-edge but also easy for any future developers to
            work on, maintain, and expand.
          </li>
          <li className=" my-3">
            <span className=" font-semibold">Custom Built: </span>
            Every project is crafted to address your unique requirements. We
            don’t believe in one-size-fits-all solutions. Instead, we take the
            time to understand your business goals and create a product that
            aligns perfectly with your vision.
          </li>
          <li className=" my-3">
            <span className=" font-semibold">
              Complete Ownership Transfer:{" "}
            </span>
            Once the project is complete, you receive full ownership of
            everything. This includes the source code, all related assets, and
            the hosting environment. You have complete control and flexibility
            to manage and modify your site as needed.
          </li>
          <li className=" my-3">
            <span className=" font-semibold">Future-Proof Design: </span>
            Built with scalability in mind, your solution will be able to grow
            and evolve with your business. We design with best practices that
            make it easy to add new features or make updates without hassle.
          </li>
          <li className=" my-3">
            <span className=" font-semibold">No Hidden Fees: </span>
            The one-time payment covers the entire development process,
            including design, development, testing, and deployment. There are no
            hidden costs or unexpected charges.
          </li>
        </ul>
      </div>
      <div className=" mt-10 max-w-7xl mb-8 md:mb-0 px-4 pb-4 m-auto pt-2 text-black bg-white w-full">
        <h2
          className={` text-center text-black font-bold px-5 m-auto mt-12 mb-8 text-4xl`}
        >
          Monthly Plan
        </h2>
        <p className=" mb-5">
          Our Monthly Payment option offers a flexible, subscription-based
          solution tailored to your business needs. This package is perfect for
          businesses that prefer manageable monthly payments while still
          receiving comprehensive web development services. Here’s what you can
          expect:
        </p>
        <ul className=" list-disc list-inside">
          <li className=" my-3">
            <span className=" font-semibold">
              Six-Month Minimum Commitment:{" "}
            </span>
            Our monthly payment plan requires a minimum commitment of six
            months. This ensures that we can provide you with consistent,
            high-quality service and support throughout the initial period of
            your project.
          </li>
          <li className=" my-3">
            <span className=" font-semibold">Buyout Option: </span>
            At the end of the six-month period, you have the option to buy out
            the entire solution. This means you can take full ownership of the
            website or application, including all source code and hosting
            environments, giving you complete control over your digital assets.
          </li>
          <li className=" my-3">
            <span className=" font-semibold">24/7 Edits:</span>
            We understand that your business operates around the clock, which is
            why we offer 24/7 edits. You can request changes or updates at any
            time, and our team will ensure that your website remains up-to-date
            and functional.
          </li>
          <li className=" my-3">
            <span className=" font-semibold">Unlimited Revisions: </span>
            Your satisfaction is our top priority. With unlimited revisions, you
            can request as many changes as needed to ensure the final product
            perfectly aligns with your vision and business goals.
          </li>
          <li className=" my-3">
            <span className=" font-semibold">Modern Frameworks: </span>
            Just like our one-time payment option, we use the latest and most
            reliable frameworks and technologies. This not only ensures a
            top-tier performance but also makes future development and
            maintenance straightforward for any developer who may work on the
            project.
          </li>
          <li className=" my-3">
            <span className=" font-semibold">No Hidden Fees: </span>
            Our monthly payment plan is transparent and straightforward. You pay
            a fixed monthly fee with no hidden costs, ensuring you can budget
            effectively without any surprises.
          </li>
        </ul>
      </div>
    </main>
  );
}
