import Benefit from "@/components/about/benefit";
import Header from "@/components/about/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
export default function About() {
  return (
    <div className="relative">
      <div className="relative w-full h-[50vh]">
        <Image
          src="/about/jumbo.png"
          alt="Jumbotron Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white mt-10 ">
            ABOUT PROCHAIN
          </h1>
        </div>
      </div>
      <Header />
      <Benefit />
      <Footer />
    </div>
  );
}
