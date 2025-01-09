import Image from "next/image";

export default function Aboutme() {
  return (
    <>
      <div className="mx-auto mt-32">
        <h1 className="text-center font-bold text-3xl mb-6 border-b-2 border-emerald-500 w-auto py-7">
          About Me
        </h1>
        <div>
          <div className="flex justify-center items-center gap-12 mb-8">
            <div>
              <Image
                src={"/img/Foto_Diri2.jpeg"}
                alt="Danielson Leong"
                width="300"
                height="300"
                className="rounded-2xl"
              ></Image>
            </div>
            <div className="max-w-2xl leading-10 text-lg">
              My name is Danielson Leong, and I was born on January 13, 2004, in
              the city of Tanjungpinang. I live on Jalan Kuantan, Gang Putri 2,
              No. 12. My hobby is listening to music. I usually listen to any
              song as long as it sounds good to me. I also enjoy watching
              movies, especially anime (Japanese animation).
            </div>
          </div>
          <div className="flex justify-center items-center gap-12">
            <div className="max-w-xl leading-10 text-lg">
              I am currently a student at STTI Tanjungpinang with the student ID
              number 3222424. I have chosen the Information Systems major. Due
              to activities in the morning, I decided to attend evening classes.
              Here, I will strive to improve and become a better version of
              myself.
            </div>
            <div>
              <Image
                src={"/img/KULIAH.jpg"}
                alt="Foto"
                width="300"
                height="300"
                className="rounded-2xl"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
