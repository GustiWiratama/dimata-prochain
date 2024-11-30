import Header from "@/components/contact/header";
import Map from "@/components/contact/map";
import SocialMedia from "@/components/contact/social-media";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
export default function Services() {
  return (
    <div className="relative">
      <div className="relative w-full h-[50vh]">
        <Image
          src="/services/service1.png"
          alt="service Image"
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
          <h1 className="text-3xl md:text-5xl font-semibold text-white mt-10 ">
            CONTACT US
          </h1>
        </div>
      </div>
      <Header />
      <SocialMedia />
      <Map />
      <Footer />
    </div>
  );
}
