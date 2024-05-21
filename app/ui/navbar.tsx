import { roboto } from "./fonts";
import Link from "next/link";

export default function NavBar() {
  //

  return (
    <nav className=" block md:flex w-full  justify-between text-2xl text-white ">
      <div>
        <p>Central Valley Web Development LLC</p>
      </div>
      <div className="block md:flex gap-3">
        <Link className=" bg-slate-500 rounded-lg py-2 px-4" href={""}>
          <p>text</p>
        </Link>
        <Link className=" bg-slate-500 rounded-lg py-2 px-4" href={""}>
          <p>text</p>
        </Link>
        <Link className=" bg-slate-500 rounded-lg py-2 px-4" href={""}>
          <p>text</p>
        </Link>
      </div>
    </nav>
  );
}
