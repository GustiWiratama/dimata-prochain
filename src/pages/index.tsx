import About from "@/components/home/about";
import Faq from "@/components/home/faq";
import Services from "@/components/home/servicess";
import Why from "@/components/home/why";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <div>
      <header
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/home/gudang1.png')" }}
      >
        <div className="absolute top-0 left-0 right-0 z-20 nav">
          <Navbar />
        </div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-4 w-[15em]">
              Integrated Process Chain Management System
            </h1>
            <p className="text-lg mb-8">
              “Centralized & Distributed in Harmony”
            </p>
            <a
              href="#consultation"
              className="bg-amber-500 text-white py-3 px-6 hover:bg-orange-600 transition"
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
