import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" w-full absolute z-10 text-slate-50">
      <nav className="container flex flex-wrap relative items-center justify-between mx-auto p-8">
        <Link className="m-2 font-bold text-3xl " href={"/"}>
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link className="m-2  " href={"/performance"}>
            Performance
          </Link>
          <Link className="m-2  " href={"/reliability"}>
            Reliability
          </Link>
          <Link className="m-2  " href={"/scale"}>
            Scale
          </Link>
        </div>
      </nav>
    </div>
  );
}
