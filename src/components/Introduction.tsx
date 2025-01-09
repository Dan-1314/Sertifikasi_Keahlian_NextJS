import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <>
      <div className="h-screen bg-slate-500 pt-32 pl-12 pr-12">
        <div className="flex justify-between align-middle items-center w-3/2">
          <div>
            <p className="text-emerald-300 text-2xl font-bold mb-4">
              Sistem Informasi
            </p>
            <h2 className="text-7xl text-white">Hello, I&apos;m</h2>
            <h2 className="text-7xl text-white">Danielson Leong</h2>
            <p className="my-8 text-white max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum
              at a praesentium laboriosam ea incidunt libero inventore maxime
              enim.
            </p>
            <div>
              <p className="bg-emerald-500 px-5 py-2 rounded-md w-fit text-white font-bold hover:bg-transparent border-solid border-2 border-transparent hover:border-emerald-500 transition duration-500 ease-in-out mt-3">
                Learn More
              </p>
            </div>
          </div>
          <div className="relative w-96 h-96">
            <Image
              src={"/img/Foto_Diri1.jpeg"}
              alt="Profile Picture"
              fill={true}
              className="rounded-2xl border-solid border-4 border-emerald-500"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
