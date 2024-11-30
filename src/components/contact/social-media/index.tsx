import Image from "next/image";

const SocialMedia = () => {
  return (
    <section
      className="relative flex flex-col text-center items-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className=" relative mt-40 flex flex-col text-center items-center">
        <div className="font-bold text-4xl text-amber-500 mb-4">
          Visit Our Social Media
        </div>
      </div>
      <div className="flex justify-evenly gap-16">
        <a
          href="https://www.instagram.com/dimata_it/?hl=en"
          target="_blank"
          className="flex flex-col whatsapp items-center w-1/3 cursor-pointer "
        >
          <div className="w-24 h-24 mt-10 overflow-hidden relative hover:scale-105 transition-all duration-100">
            <Image
              src="/contact/instagram1.svg"
              alt="whatsapp"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-bold text-2xl my-4">@dimata_it</div>
        </a>
        <a
          href="https://www.facebook.com/DimataITSolution/?locale=id_ID"
          target="_blank"
          className="flex flex-col whatsapp items-center w-1/3 cursor-pointer "
        >
          <div className="w-24 h-24 mt-10 overflow-hidden relative hover:scale-105 transition-all duration-100">
            <Image
              src="/contact/fb.svg"
              alt="whatsapp"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-bold text-2xl my-4">PT-Dimata Sora Jayate</div>
        </a>
        <a
          href="https://www.linkedin.com/company/pt-dimata-sora-jayate/?originalSubdomain=id"
          target="_blank"
          className="flex flex-col whatsapp items-center w-1/3 cursor-pointer "
        >
          <div className="w-24 h-24 mt-10 overflow-hidden relative hover:scale-105 transition-all duration-100">
            <Image
              src="/contact/linkedIn.svg"
              alt="whatsapp"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-bold text-2xl my-4">PT Dimata Sora Jayate</div>
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
