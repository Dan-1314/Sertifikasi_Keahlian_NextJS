import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="w-screen p-8 bg-slate-800 text-white flex justify-between fixed z-[9999]">
        <div>
          <p className="text-xl font-bold">Danielson Leong</p>
        </div>
        <div>
          <ul className="flex align-middle gap-4 font-bold">
            <li>
              <p className="text-emerald-500">Home</p>
            </li>
            <li>
              <Link href="./about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
