import Footer from "@/components/footer";
import About from "@/components/home/about";
import Faq from "@/components/home/faq";
import Services from "@/components/home/servicess";
import Why from "@/components/home/why";
import Navbar from "@/components/navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Image from "next/image";
import { useEffect } from "react";
// ..

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of data-aos as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by data-aos-* attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div>
      <header
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/home/gudang1.png')" }}
      >
        <div className="absolute top-0 left-0 right-0 z-20 nav">
          <Navbar />
        </div>
        <div className="relative flex justify-center items-center h-full">
          <div className="w-[400px] h-[400px] mr-28 mt-14 overflow-hidden hidden md:flex">
            <Image
              src="/home/prochain-logo.png"
              alt="service Image"
              width={300}
              height={300}
              quality={100}
              className="w-[400px] h-[400px] object-cover"
              priority
            />
          </div>
          <div className=" text-white text-center md:text-start">
            <h1 className="text-4xl font-semibold w-[12em] leading-tight">
              Integrated Process Chain Management System
            </h1>
            <p className="text-lg mt-10 mb-14 italic">
              “Centralized & Distributed in Harmony”
            </p>
            <a
              href="#consultation"
              className="bg-amber-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </header>
      <About />
      <Services />
      <Why />
      <Faq />
      <Footer />
    </div>
  );
}
