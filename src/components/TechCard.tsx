import Image from "next/image";

type TechCard = {
  imageURL: string;
  techStack: string;
};

export default function TechCard({ imageURL, techStack }: TechCard) {
  return (
    <>
      <div className="w-48 h-48 flex justify-center items-center shadow-lg drop-shadow overflow-hidden rounded-3xl bg-emerald-200 bg-opacity-10 border border-white border-opacity-20 flex-col hover:bg-emerald-500 hover:scale-110 transition duration-300">
        <div className="relative object-cover w-20 h-20">
          <Image src={imageURL} alt="a" fill={true}></Image>
        </div>
        <p className="text-white text-center text-xs leading-4 mt-4">
          {techStack}
        </p>
      </div>
    </>
  );
}
