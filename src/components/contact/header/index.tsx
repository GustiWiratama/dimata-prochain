import Image from "next/image";

const Header = () => {
  return (
    <section
      className="relative flex flex-col text-center items-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className=" relative mt-20 flex flex-col text-center items-center">
        <div className="font-bold text-4xl mb-4">
          Connect with Us for Tailored Business Solutions
        </div>
        <p className="w-4/6">
          Interested in how we can assist your business? Reach out to us at
          Dimata ProChain to explore effective solutions tailored to your needs.
        </p>
      </div>
      <a
        href="https://wa.me/+6285737454512/"
        className="whatsapp flex flex-col items-center"
      >
        <div className=" w-24 h-24 mt-24 overflow-hidden relative hover:scale-105 transition-all duration-100">
          <Image
            src="/contact/whatsapp.svg"
            alt="whatsapp"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="font-bold text-2xl my-4">+6218237482747 (Joseph)</div>
      </a>
    </section>
  );
};

export default Header;
