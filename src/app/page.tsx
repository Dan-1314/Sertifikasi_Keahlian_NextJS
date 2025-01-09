import Introduction from "@/components/Introduction";
import Aboutme from "@/components/Aboutme";
import Tech from "@/components/Tech";
import Education from "@/components/Education";

export default function Page() {
  return (
    <>
      <Introduction />
      <Tech />
      <Aboutme />
      <Education />

      <div className="flex justify-center items-center h-screen gap-10 ">
        <div>
          <h1 className="text-7xl font-bold">Danielson Leong</h1>
          <p className="text-xl font-light">Mahasiswa STTI Tanjungpinang</p>
        </div>
      </div>
    </>
  );
}
