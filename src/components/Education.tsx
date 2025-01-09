import Image from "next/image";

export default function Tech() {
  return (
    <>
      <div className="mx-auto py-12 bg-slate-800 mt-24">
        <h1 className="text-center font-bold text-3xl mb-6 border-b-2 border-emerald-500 w-auto py-7 text-white">
          Educational History
        </h1>
        <div className="flex justify-center flex-wrap gap-6">
          <div className="rounded-2xl border-solid border-gray-500 border-2 overflow-hidden">
            <Image
              src={"/img/TK_MW.jpg"}
              alt="TK"
              width="300"
              height="300"
            ></Image>
            <p className="text-center py-10 font-bold text-white">
              TK Maitreyawira Tanjungpinang
            </p>
          </div>
          <div className="rounded-2xl border-solid border-gray-500 border-2 overflow-hidden">
            <Image
              src={"/img/SD_MW.jpg"}
              alt="SD"
              width="300"
              height="300"
            ></Image>
            <p className="text-center py-10 font-bold text-white">
              SD Maitreyawira Tanjungpinang
            </p>
          </div>
          <div className="rounded-2xl border-solid border-gray-500 border-2 overflow-hidden">
            <Image
              src={"/img/SMP_MW.png"}
              alt="SMP"
              width="300"
              height="300"
            ></Image>
            <p className="text-center py-10 font-bold text-white">
              SMP Maitreyawira Tanjungpinang
            </p>
          </div>
          <div className="rounded-2xl border-solid border-gray-500 border-2 overflow-hidden">
            <Image
              src={"/img/SMA_MW.jpg"}
              alt="SMA"
              width="300"
              height="300"
            ></Image>
            <p className="text-center py-10 font-bold text-white">
              SMA Maitreyawira Tanjungpinang
            </p>
          </div>
          <div className="rounded-2xl border-solid border-gray-500 border-2 overflow-hidden">
            <Image
              src={"/img/SMA_MW.jpg"}
              alt="KULIAH STTI"
              width="300"
              height="300"
            ></Image>
            <p className="text-center py-10 font-bold text-white">
              STT Indonesia Tanjungpinang
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
