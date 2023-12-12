import Link from "next/link";

export default function Navbar() {
    return (
      <ul className="flex gap-4 justify-center shadow">
        <li className="hover:bg-slate-200 p-2 my-2 rounded-md cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-slate-200 p-2 my-2 rounded-md cursor-pointer">
          <Link href="/about">About</Link>
        </li>
      </ul>
    );
};
