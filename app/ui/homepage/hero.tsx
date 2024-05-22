export default function Hero() {
  return (
    <section className=" flex flex-col min-w-full text-black bg-white text-4xl justify-center pb-6 pt-14">
      <div className=" mb-14 align-middle">
        <h1 className=" font-bold text-center">
          Central Valley Businesses, Growing Together One Click At A Time.
        </h1>
      </div>
      <div className="flex text-center flex-col text-2xl ">
        <p className=" pb-5">
          Websites built on the cutting edge. Built for scalability. Built for
          expandability.
        </p>
        <button className="border-2 text-xl m-auto bg-black text-white shadow-2xl text-center block px-4 py-2  transition duration-200 ease-in-out focus:outline-none focus:ring-2">
          Get Started
        </button>
        <h2></h2>
      </div>
    </section>
  );
}
